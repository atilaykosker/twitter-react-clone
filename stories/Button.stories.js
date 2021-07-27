import React from 'react';

import Button from '../components/button';
import NavigationButton from '../components/navigation-button';
import ThemeButton from '../components/theme-button';
import TextTitle from '../components/text-title';
import Navigation from '../components/navigation';
import Stack from '../components/stack';
import { Home } from '../components/icons';

export default {
   component: Button,
   title: 'Components/Button',
};

export const Normal = () => <Button>Button</Button>;
export const Theme = () => (
   <Stack column>
      <ThemeButton>Tweet</ThemeButton>
      <ThemeButton full>Tweet Full</ThemeButton>
      <ThemeButton big full>
         Tweet Big
      </ThemeButton>
   </Stack>
);
export const NavButton = () => (
   <NavigationButton>
      <Home />
      <TextTitle>Button</TextTitle>
   </NavigationButton>
);

const Template = (args) => <Navigation selectedKey="home" {...args} />;

export const Nav = Template.bind({});

Nav.args = {
   flat: false,
};
