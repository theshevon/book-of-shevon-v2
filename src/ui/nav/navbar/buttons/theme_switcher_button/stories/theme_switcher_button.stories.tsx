import { storiesOf } from '@storybook/react';
import React from 'react';
import { ThemeSwitcherButton } from '../theme_switcher_button';

storiesOf('UI/Nav/Navbar/Buttons/ThemeSwitcherButton', module)
  .add('ThemeSwitcherButton', () => {
    return (
      <ThemeSwitcherButton/>
    );
  });
