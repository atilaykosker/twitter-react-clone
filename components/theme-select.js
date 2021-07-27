/* eslint-disable react/prop-types */
import React from 'react';
import cn from 'classnames';

import styles from './theme-select.module.css';

const ThemeSelect = () => {
   return (
      <div className={styles.container}>
         <input type="radio" value="light" name="theme" checked></input>
         <input type="radio" value="dim" name="theme"></input>
         <input type="radio" value="dark" name="theme"></input>
      </div>
   );
};
export default ThemeSelect;
