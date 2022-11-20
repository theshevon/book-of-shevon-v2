import { storiesOf } from '@storybook/react';
import React from 'react';
import { HamburgerMenu } from '../hamburger_menu';

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

storiesOf('UI/Nav/HamburgerMenu/HamburgerMenu', module)
  .add('HamburgerMenu', () => (
    <HamburgerMenu
        routesData={routesData}
    />
  ));
