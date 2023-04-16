import React from 'react';
import { useQueryClient } from 'react-query';
import { MdClose } from 'react-icons/md';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { v4 as uuidv4 } from 'uuid';
import cn from 'classnames';

import { Api } from '../../api/event-api';
import { IconButton } from './../Button/IconButton';

import styles from './AddEventPopup.module.scss';
import { FormInput } from './FormInput';

const schema = yup.object().shape({
  title: yup.string().required(),
  description: yup.string(),
  start: yup.string().required(),
  end: yup.string().required(),
});

export const AddEventPopup = ({ handleClose }) => {
  const queryClient = useQueryClient();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: 'onChange',
  });

  const handleAddEvent = async (values) => {
    try {
      console.log(values);
      // const id = await uuidv4();
      // const newEvent = { id, ...values };
      // const response = await Api.addEvent(newEvent);

      if (response.status === 201) {
        queryClient.invalidateQueries('get-events');
        handleClose();
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
    <div className={styles.addEventPopup} onClick={handleCancel}>
      <div className={styles.content} onClick={(e) => e.stopPropagation()}>
        <div className={styles.header}>
          <h2 className={styles.title}>Add Event</h2>
          <IconButton onClick={handleClose}>
            <MdClose />
          </IconButton>
        </div>
        <form onSubmit={handleSubmit(handleAddEvent)} className={styles.form}>
          {/* <input
            autoFocus
            className={cn({
              [styles.error]: errors.title,
            })}
            type="text"
            {...register('title', { required: true })}
            placeholder="Title"
          /> */}
          <FormInput
            autoFocus
            type="text"
            {...register('title', { required: true })}
            placeholder="Title"
          />
          {errors.title && <p className={styles.errorText}>Title is required.</p>}
          <input
            className={cn({
              [styles.error]: errors.description,
            })}
            type="text"
            {...register('description')}
            placeholder="Description"
          />
          <input
            className={cn({
              [styles.error]: errors.start,
            })}
            type="date"
            {...register('start', { required: true })}
            placeholder="Start date"
          />
          {errors.start && <p className={styles.errorText}>Start date is required.</p>}
          <input
            className={cn({
              [styles.error]: errors.end,
            })}
            type="date"
            {...register('end', { required: true })}
            placeholder="End date"
          />
          {errors.end && <p className={styles.errorText}>End date is required.</p>}
          <div className={styles.btns}>
            <button onClick={handleCancel} className={styles.btn}>
              Cancel
            </button>
            <button type="submit" className={styles.btn}>
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
