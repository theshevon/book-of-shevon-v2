import { storiesOf } from '@storybook/react';
import React from 'react';

import { HamburgerMenu } from 'ui/nav/hamburger_menu/hamburger_menu';

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
  },
];

storiesOf('UI/Nav/HamburgerMenu/HamburgerMenu', module)
  .add('HamburgerMenu', () => (
    <HamburgerMenu
        routesData={routesData}
        activeRoute='##'
    />
  ));
