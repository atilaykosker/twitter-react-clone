/* eslint-disable react/prop-types */
import React from 'react';
import cn from 'classnames';

import styles from './photo.module.css';

const Photo = ({
   src = 'https://pbs.twimg.com/profile_images/1077499653195812864/Ay7nqXJl_400x400.jpg',
   alt,
}) => {
   return (
      <div className={cn([styles.photo])}>
         <img className={styles.img} src={src} alt={alt}></img>
      </div>
   );
};
export default Photo;
