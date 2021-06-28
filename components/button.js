/* eslint-disable react/prop-types */
import React from 'react';

import styles from './button.module.css';

const Button = ({ children, ...props }) => {
   return (
      <button type="button" className={styles.button} {...props}>
         {children}
      </button>
   );
};

export default Button;
