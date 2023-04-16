import React from 'react';
import { MdClose } from 'react-icons/md';
import { useQuery, useQueryClient } from 'react-query';
import { AiTwotoneDelete } from 'react-icons/ai';

import { useEventContext } from '../../context/EventProvider';
import { Portal } from './../Portal/Portal';
import { IconButton } from '../Button/IconButton';
import { Api } from './../../api/event-api';

import styles from './EventDetails.module.scss';

export const EventDetails = () => {
  const queryClient = useQueryClient();
  const { eventId, setEventId } = useEventContext();
  const { data } = useQuery(['event', eventId], () => Api.getOneEvent(eventId), {
    staleTime: Infinity,
  });

  if (!data) return null;

  const { id, title, description, start, end } = data;

  const handleClose = () => {
    setEventId(null);
  };

  const handleRemoveEvent = async () => {
    try {
      const res = await Api.removeEvent(id);
      if (res.status === 200) {
        handleClose();
        queryClient.invalidateQueries('get-events');
      } else {
        alert('Something went wrong!');
      }
    } catch ({ message }) {
      alert(message);
    }
  };

  return (
    <Portal>
      {eventId && (
        <div className={styles.eventDetails} onClick={handleClose}>
          <div className={styles.content} onClick={(e) => e.stopPropagation()}>
            <div className={styles.header}>
              <h2>Event Details</h2>
              <IconButton onClick={handleRemoveEvent}>
                <AiTwotoneDelete />
              </IconButton>
              <IconButton onClick={handleClose}>
                <MdClose />
              </IconButton>
            </div>
            <div className={styles.body}>
              <p>Id:{id}</p>
              <p>Title: {title}</p>
              {description && <p>Description: {description}</p>}
              <p>Start: {start.split('-').join(' : ')}</p>
              <p>End: {end.split('-').join(' : ')}</p>
            </div>
          </div>
        </div>
      )}
    </Portal>
  );
};
