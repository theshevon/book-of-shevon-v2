import { storiesOf } from '@storybook/react';
import React, { useState } from 'react';
import { ToggleMenuButton } from '../toggle_menu_button';

const routesData = [
  {
    label: () => 'Route 1',
    path: '#',
    index: -1,
  },
  {
    label: () => 'Route 2',
    path: '##',
    index: 0,
  },
  {
    label: () => 'Route 3',
    path: '#',
    index: 1,
  },
];

storiesOf('UI/Nav/HamburgerMenu/Buttons', module)
  .add('ToggleMenuButton', () => {
    const [menuOpen, setMenuOpen] = useState<boolean>(false);
    const toggleMenu = () => setMenuOpen(!menuOpen);
    return (
      <ToggleMenuButton
          routesData={routesData}
          menuOpen={menuOpen}
          onClick={toggleMenu}
      />
    );
  });
