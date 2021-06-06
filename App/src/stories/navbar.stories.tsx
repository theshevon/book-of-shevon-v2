import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { StoryGroup } from './stories';
import { MenuButton } from '../ui/navbar/menu_button/menu_button';

import BgImage from './assets/abstract_bg.jpeg';

storiesOf('UI/NavBar', module)
  .add('Menu Button', () => (
    <StoryGroup>
      <MenuButton
          menuOpen={false}
          onClick={action('Menu Toggle Clicked!')}
      />
      <MenuButton
          menuOpen={true}
          onClick={action('Menu Toggle Clicked!')}
      />
    </StoryGroup>
  ))
  .add('Menu Button with (distracting) background', () => (
    <>
      <img
          src={BgImage}
          style={{ position: 'absolute', clip: 'rect(0px,165px,80px,0px)' }}
      />
      <div
          style={{ padding: '25px' }}
      >
        <MenuButton
            menuOpen={false}
            onClick={action('Menu Toggle Clicked!')}
        />
      </div>
    </>
  ));
