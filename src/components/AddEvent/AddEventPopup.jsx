import React from 'react';
import { MdClose } from 'react-icons/md';
import { Api } from '../../api/event-api';

import styles from './AddEventPopup.module.scss';

const obj = {
  id: 'ad9',
  title: 'hi',
  start: '2023-04-17T01:00:00',
  end: '2023-04-17T02:00:00',
};

export const AddEventPopup = ({ handleClose }) => {
  const handleAddEvent = async () => {
    try {
      const response = await Api.addEvent(obj);
      if (response.status === 201) {
        handleClose();
        alert('Event has added');
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
          <button className={styles.btn} onClick={handleClose}>
            <MdClose />
          </button>
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
