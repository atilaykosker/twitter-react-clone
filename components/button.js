/* eslint-disable react/prop-types */
import React from 'react';

import cn from 'classnames';

import styles from './button.module.css';

const Button = ({ full = false, children, className, ...props }) => {
   return (
      <button
         type="button"
         className={cn(styles.button, full && styles.fullWidth, className)}
         {...props}
      >
         {children}
      </button>
   );
};

export default Button;
