/* eslint-disable react/prop-types */
// pages/_app.js
import React, { PureComponent } from 'react';

import '../styles/app.css';

export default function MyApp({ Component, pageProps }) {
   return <Component {...pageProps} />;
}
