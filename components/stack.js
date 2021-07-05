/* eslint-disable react/prop-types */
import React from 'react';
import cn from 'classnames';

import styles from './stack.module.css';

const Stack = ({ gap = 20, column = false, children }) => {
   return (
      <div
         className={cn([styles.stack, column && styles.column])}
         style={{ '--gap': `${gap}px` }}
      >
         {children}
      </div>
   );
};
export default Stack;
