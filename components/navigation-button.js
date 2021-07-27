/* eslint-disable react/prop-types */
import React from 'react';

import Button from './button';

import cn from 'classnames';

import styles from './navigation-button.module.css';

const NavigationButton = ({
   href,
   notify,
   selected,
   className,
   children,
   ...props
}) => {
   return (
      <Button
         className={cn(
            styles.navButton,
            selected && styles.navButtonSelected,
            className
         )}
         href={href}
         {...props}
      >
         {notify > 0 && <span className={styles.notify}>{notify}</span>}

         {children}
      </Button>
   );
};

export default NavigationButton;
