/* eslint-disable react/prop-types */
import React from 'react';

import NavigationButton from './navigation-button';
import TextTitle from './text-title';
import {
   Twitter,
   Home,
   HomeFill,
   Explore,
   ExplorerFill,
   Notification,
   NotificationFill,
   Messages,
   MessagesFill,
   Bookmark,
   BookmarkFill,
   Lists,
   ListsFill,
   Profile,
   ProfileFill,
   More,
} from './icons';

import styles from './navigation.module.css';

const MENU = [
   {
      key: 'twitter',
      icon: <Twitter />,
      title: '',
      notify: 0,
   },
   {
      key: 'home',
      icon: <Home />,
      iconSelected: <HomeFill />,
      title: 'Home',
      notify: 0,
   },
   {
      key: 'explore',
      icon: <Explore />,
      iconSelected: <ExplorerFill />,
      title: 'Explore',
   },
   {
      key: 'notification',
      icon: <Notification />,
      iconSelected: <NotificationFill />,
      title: 'Notifications',
      notify: 17,
   },
   {
      key: 'messages',
      icon: <Messages />,
      iconSelected: <MessagesFill />,
      title: 'Messages',
      notify: 2,
   },
   {
      key: 'bookmark',
      icon: <Bookmark />,
      iconSelected: <BookmarkFill />,
      title: 'Bookmarks',
      notify: 0,
   },
   {
      key: 'lists',
      icon: <Lists />,
      iconSelected: <ListsFill />,
      title: 'Lists',
      notify: 0,
   },
   {
      key: 'profile',
      icon: <Profile />,
      iconSelected: <ProfileFill />,
      title: 'Profile',
      notify: 0,
   },
   {
      key: 'more',
      icon: <More />,
      iconSelected: <HomeFill />,
      title: 'More',
      notify: 0,
   },
];

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
