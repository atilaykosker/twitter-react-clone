import React from 'react';

import Button from '../components/button';
import NavigationButton from '../components/navigation-button';
import Navigation from '../components/navigation';

export default {
   component: Button,
   title: 'Components/Button',
};

export const Normal = () => <Button>Button</Button>;
export const NavButton = () => <NavigationButton>Button</NavigationButton>;
export const Nav = () => <Navigation />;
