import React from 'react';
import { storiesOf } from '@storybook/react';

import { Navbar } from '../navbar';

const routesData = [
  {
    label: 'Route 1',
    pathname: '#',
    index: -1,
  },
  {
    label: 'Route 2 (Active)',
    pathname: '##',
    index: 0,
  },
  {
    label: 'Route 3',
    pathname: '#',
    index: 1,
  },
];

storiesOf('UI/Nav/Navbar/Navbar', module)
  .add('Navbar', () => (
    <Navbar 
        routesData={routesData}
        activeRoute='##'
    />
  ));
