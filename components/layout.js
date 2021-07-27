/* eslint-disable react/prop-types */
import React from 'react';
import cn from 'classnames';
import useWindowSize from '../hooks/useWindowSize';

import CONST from '../constants/index';

import Sidebar from '../components/col-sidebar';
import Main from '../components/col-main';
import Extra from '../components/col-extra';
import styles from './layout.module.css';

const Layout = ({ children }) => {
   const size = useWindowSize();
   const flat = size.width < CONST.DESKTOP_SIZE;
   return (
      <div className={cn([styles.layout])}>
         <Sidebar flat={flat}>Sidebar</Sidebar>

         <Main> {children}</Main>

         {size.width > CONST.TABLET_SIZE && <Extra>Extra</Extra>}
      </div>
   );
};

export default Layout;
