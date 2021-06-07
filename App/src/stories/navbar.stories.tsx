import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { StoryGroup } from './stories';
import { Menu } from '../ui/navbar/menu/menu';
import { MenuButton } from '../ui/navbar/menu_button/menu_button';
import { Navbar } from '../ui/navbar/navbar';

import BgImage from './assets/abstract_bg.jpeg';

const links = [
  {
    label: 'About',
    route: '#',
    active: false,
  },
  {
    label: 'Home',
    route: '#',
    active: true,
  },
  {
    label: 'Blog',
    route: '#',
    active: false,
  }
]

storiesOf('UI/NavBar/MenuButton', module)
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

storiesOf('UI/NavBar/Menu', module)
  .add('Menu', () => (
    <div
        style={{ 
          height: '50px', 
          display: 'flex', 
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'rgba(40, 40, 40, 80%)'
        }}
    >  
      <Menu
          links={links}
      />
    </div>
  ));

storiesOf('UI/NavBar/Navbar', module)
  .add('Navbar', () => (
    <Navbar />
  ));