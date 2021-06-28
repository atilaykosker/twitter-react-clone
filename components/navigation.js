/* eslint-disable react/prop-types */
import React from 'react';

import NavigationButton from './navigation-button';
import {
   Twitter,
   Home,
   Explore,
   Notification,
   Messages,
   Bookmark,
   Lists,
   Profile,
   More,
} from './icons';

import styles from './navigation.module.css';

const Navigation = () => {
   return (
      <nav className={styles.nav}>
         <NavigationButton>
            <Twitter />
         </NavigationButton>

         <NavigationButton>
            <Explore />
            <span>Explore</span>
         </NavigationButton>

         <NavigationButton>
            <Notification />
            <span>Notification</span>
         </NavigationButton>

         <NavigationButton>
            <Messages />
            <span>Messages</span>
         </NavigationButton>

         <NavigationButton>
            <Bookmark />
            <span>Bookmark</span>
         </NavigationButton>

         <NavigationButton>
            <Lists />
            <span>Lists</span>
         </NavigationButton>

         <NavigationButton>
            <Profile />
            <span>Profile</span>
         </NavigationButton>

         <NavigationButton>
            <More />
            <span>More</span>
         </NavigationButton>
      </nav>
   );
};

export default Navigation;
