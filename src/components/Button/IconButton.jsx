import React from 'react';
import classNames from 'classnames';

import styles from './IconButton.module.scss';

export const IconButton = ({ children, className, ...rest }) => {
  return (
    <button className={classNames(styles.button, className)} {...rest}>
      {children}
    </button>
  );
};
