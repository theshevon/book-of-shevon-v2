import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';

import { StoryGroup } from './stories';
import { HorizontalMenu } from '../ui/nav/navbar/horizontal_menu/horizontal_menu';
import { ToggleMenuButton as ToggleHorizontalMenuButton } from './../ui/nav/navbar/buttons/toggle_menu_button/toggle_menu_button';
import { ToggleMenuButton as ToggleHamburgerMenuButton } from './../ui/nav/hamburger_menu/buttons/toggle_menu_button/toggle_menu_button';
import { Navbar } from './../ui/nav/navbar/navbar';
import { Drawer } from './../ui/nav/hamburger_menu/drawer/drawer';
import { HamburgerMenu } from './../ui/nav/hamburger_menu/hamburger_menu';

const routesData = [
  {
    label: 'Route 1',
    pathname: '#',
    index: -1,
  },
  {
    label: 'Route 2',
    pathname: '##',
    index: 0,
  },
  {
    label: 'Route 3',
    pathname: '#',
    index: 1,
  }
]

storiesOf('UI/Nav/Navbar/Buttons', module)
  .add('ToggleMenuButton', () => {
    const [menuOpen, setMenuOpen] = useState<boolean>(false);
    const toggleMenu = () => setMenuOpen(!menuOpen);
    return (
      <StoryGroup>
        <ToggleHorizontalMenuButton
            menuOpen={menuOpen}
            onClick={toggleMenu}
        />
      </StoryGroup>
    )
  });

storiesOf('UI/Nav/Navbar/HorizontalMenu', module)
  .add('HorizontalMenu', () => (
    <StoryGroup>
      <div
          style={{ 
            height: '50px', 
            display: 'flex', 
            justifyContent: 'center',
            alignItems: 'center',
          }}
      >  
        <HorizontalMenu
            routesData={routesData}
            activeRoute='##'
        />
      </div>
    </StoryGroup>
  ));

storiesOf('UI/Nav/Navbar/Navbar', module)
  .add('Navbar', () => (
    <Navbar 
        routesData={routesData}
        activeRoute='##'
    />
  ));

storiesOf('UI/Nav/HamburgerMenu/Buttons', module)
.add('ToggleMenuButton', () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);
  return (
    <StoryGroup>
      <ToggleHamburgerMenuButton
          menuOpen={menuOpen}
          onClick={toggleMenu}
      />
    </StoryGroup>
  )
});

storiesOf('UI/Nav/HamburgerMenu/Drawer', module)
  .add('Drawer', () => (
    <StoryGroup>
        <Drawer
            routesData={routesData}
            activeRoute='##'
            show={true}
        />
    </StoryGroup>
  ));

storiesOf('UI/Nav/HamburgerMenu/HamburgerMenu', module)
  .add('HamburgerMenu', () => (
    <HamburgerMenu 
        routesData={routesData}
        activeRoute='##'
    />
  ));
