import React from 'react';
import { useQueryClient } from 'react-query';
import { MdClose } from 'react-icons/md';
import { Api } from '../../api/event-api';

import styles from './AddEventPopup.module.scss';
import { IconButton } from './../Button/IconButton';

const obj = {
  id: 'ad19',
  title: 'hi',
  description: 'Test',
  start: '2023-04-16T01:00:00',
  end: '2023-04-17T05:00:00',
};

export const AddEventPopup = ({ handleClose }) => {
  const queryClient = useQueryClient();
  const handleAddEvent = async () => {
    try {
      const response = await Api.addEvent(obj);
      if (response.status === 201) {
        handleClose();
        queryClient.invalidateQueries('get-events');
      } else {
        alert('Something went wrong!');
      }
    } catch ({ message }) {
      alert(message);
    }
  };

  const handleCancel = () => {
    handleClose();
  };
  return (
    <div className={styles.addEventPopup}>
      <div className={styles.content}>
        <div className={styles.header}>
          <h2 className={styles.title}>Add Event</h2>
          <IconButton onClick={handleClose}>
            <MdClose />
          </IconButton>
        </div>
        <div className={styles.body}>
          <input placeholder="Title" required />
          <input placeholder="Description" />
          <input placeholder="start date" required />
          <input placeholder="end date" required />
        </div>
        <div className={styles.footer}>
          <button onClick={handleCancel} className={styles.fbtn}>
            Cancel
          </button>
          <button onClick={handleAddEvent} className={styles.fbtn}>
            Add
          </button>
        </div>
      </div>
    </div>
  );
};
