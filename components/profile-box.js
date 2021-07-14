/* eslint-disable react/prop-types */
import React from 'react';
import cn from 'classnames';

import Photo from './photo';
import { ArrowBottom } from './icons';
import Button from './button';
import TextBody from './text-body';

import styles from './profile-box.module.css';

const ProfileBox = ({ name = 'Atılay Köşker', slug = 'atilaykosker' }) => {
   return (
      <Button className={cn([styles.box])}>
         <Photo />
         <div className={styles.body}>
            <TextBody bold>{name}</TextBody>
            <TextBody className={styles.slug}>@{slug}</TextBody>
         </div>
         <ArrowBottom className={styles.icon} />
      </Button>
   );
};
export default ProfileBox;