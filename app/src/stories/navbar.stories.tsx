import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { StoryGroup } from './stories';
import { HorizontalMenu } from '../ui/nav/navbar/horizontal_menu/horizontal_menu';
import { ToggleMenuButton } from './../ui/nav/navbar/buttons/toggle_menu_button/toggle_menu_button';
import { Navbar } from './../ui/nav/navbar/navbar';

import BgImage from './assets/abstract_bg.jpeg';

const routes = [
  {
    label: 'About',
    route: '#',
    index: -1,
  },
  {
    label: 'Home',
    route: '#',
    index: 0,
  },
  {
    label: 'Blog',
    route: '#',
    index: 1,
  }
]

storiesOf('UI/NavBar/ToggleMenuButton', module)
  .add('Toggle Menu Button', () => (
    <StoryGroup>
      <ToggleMenuButton
          menuOpen={false}
          onClick={action('Menu Toggle Clicked!')}
      />
      <ToggleMenuButton
          menuOpen={true}
          onClick={action('Menu Toggle Clicked!')}
      />
    </StoryGroup>
  ))
  .add('ToggleMenu Button with (distracting) background', () => (
    <>
      <img
          src={BgImage}
          style={{ position: 'absolute', clip: 'rect(0px,165px,80px,0px)' }}
          alt={"Distracting background"}
      />
      <div
          style={{ padding: '25px' }}
      >
        <ToggleMenuButton
            menuOpen={false}
            onClick={action('Menu Toggle Clicked!')}
        />
      </div>
    </>
  ));

// storiesOf('UI/NavBar/Menu', module)
//   .add('Menu', () => (
//     <StoryGroup>
//       <div
//           style={{ 
//             height: '50px', 
//             display: 'flex', 
//             justifyContent: 'center',
//             alignItems: 'center',
//             backgroundColor: 'rgba(40, 40, 40, 80%)'
//           }}
//       >  
//         <Menu
//             routes={routes}
//             activeRoute='/'
//             orientation='horizonal'
//         />
//       </div>
//     </StoryGroup>
//   ));

storiesOf('UI/NavBar/Navbar', module)
  .add('Navbar', () => (
    <Navbar 
      routes={routes}
      activeRoute='/'
    />
  ));