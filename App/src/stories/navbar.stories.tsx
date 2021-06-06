import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import { StoryGroup } from './stories';
import { MenuButton } from '../ui/navbar/menu_button/menu_button';

storiesOf('UI/NavBar', module)
  .add('Menu Button', () => (
    <MenuButton />
  ))
