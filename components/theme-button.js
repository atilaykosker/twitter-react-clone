/* eslint-disable react/prop-types */
import React from 'react';

import Button from './button';

import cn from 'classnames';

import styles from './theme-button.module.css';

const ThemeButton = ({ className, children, big = false, ...props }) => {
   return (
      <Button
         className={cn(styles.button, big && styles.bigButton, className)}
         {...props}
      >
         {children}
      </Button>
   );
};

export default ThemeButton;
