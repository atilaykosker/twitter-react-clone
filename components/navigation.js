/* eslint-disable react/prop-types */
import React from 'react';

import { MENU } from '../constants/index';
import styles from './navigation.module.css';

import NavigationButton from './navigation-button';
import TextTitle from './text-title';

const Navigation = ({ flat = false, selectedKey = 'home' }) => {
   return (
      <nav className={styles.nav}>
         {MENU.map((menu) => {
            const showTitle = !flat && menu.title.length > 0;
            const selected = selectedKey === menu.key;
            return (
               <NavigationButton
                  key={menu.key}
                  notify={menu.notify}
                  selected={selected}
                  href={menu.path}
                  className={styles.navButton}
               >
                  {selected ? menu.iconSelected : menu.icon}
                  {showTitle && <TextTitle>{menu.title}</TextTitle>}
               </NavigationButton>
            );
         })}
      </nav>
   );
};

export default Navigation;
