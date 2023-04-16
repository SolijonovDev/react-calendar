import React, { useState } from 'react';
import { GrAdd } from 'react-icons/gr';

import { AddEventPopup } from './AddEventPopup';
import { Portal } from '../Portal/Portal';

import styles from './AddEvent.module.scss';

export const AddEvent = () => {
  const [isOpenPopup, setOpenPopup] = useState(false);
  const showPopup = () => setOpenPopup(true);
  const hidePopup = () => setOpenPopup(false);

  return (
    <div>
      <button onClick={showPopup} className={styles.addEvent}>
        <GrAdd />
      </button>
      <Portal>{isOpenPopup && <AddEventPopup handleClose={hidePopup} />}</Portal>
    </div>
  );
};
