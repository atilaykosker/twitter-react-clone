/* eslint-disable react/prop-types */
import React from 'react';
import cn from 'classnames';
import Link from 'next/link';

import styles from './button.module.css';

const LinkButton = ({ href, children, ...props }) => {
   return (
      <Link href={href}>
         <a {...props}>{children}</a>
      </Link>
   );
};
const BaseButton = ({ children, ...props }) => {
   return (
      <button type="button" {...props}>
         {children}
      </button>
   );
};

const Button = ({ full = false, children, className, ...props }) => {
   const Comp = props.href ? LinkButton : BaseButton;
   return (
      <Comp
         className={cn(styles.button, full && styles.fullWidth, className)}
         {...props}
      >
         {children}
      </Comp>
   );
};

export default Button;
