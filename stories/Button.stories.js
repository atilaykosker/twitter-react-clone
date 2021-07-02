import React from 'react';

import Button from '../components/button';
import NavigationButton from '../components/navigation-button';
import TitleBold from '../components/title-bold';
import Navigation from '../components/navigation';
import { Home } from '../components/icons';

export default {
   component: Button,
   title: 'Components/Button',
};

export const Normal = () => <Button>Button</Button>;
export const NavButton = () => (
   <NavigationButton>
      <Home />
      <TitleBold>Button</TitleBold>
   </NavigationButton>
);
export const Nav = () => <Navigation selectedKey="home" />;
