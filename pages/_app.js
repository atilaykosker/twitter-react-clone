/* eslint-disable react/prop-types */
// pages/_app.js
import React, { PureComponent, useState, useEffect } from 'react';
import StoreContext from '../store';
import '../styles/app.css';

export default function MyApp({ Component, pageProps }) {
   const [theme, setTheme] = useState(() => {
      let themeStr = localStorage.getItem('THEME');
      return themeStr;
   });

   const changeTheme = (theme) => {
      setTheme(theme);
      localStorage.setItem('THEME', theme);
   };

   useEffect(() => {
      const $html = document.querySelector('html');
      $html.classList.remove('light');
      $html.classList.remove('dim');
      $html.classList.remove('dark');
      $html.classList.add(theme);
   }, [theme]);

   return (
      <StoreContext.Provider value={{ theme, changeTheme }}>
         <Component {...pageProps} />;
      </StoreContext.Provider>
   );
}
