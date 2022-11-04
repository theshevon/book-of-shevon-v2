import { storiesOf } from '@storybook/react';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { Navbar } from '../navbar';

const routesData = [
  {
    label: 'Route 1',
    path: '#',
    index: -1,
  },
  {
    label: 'Route 2',
    path: '##',
    index: 0,
  },
  {
    label: 'Route 3',
    path: '#',
    index: 1,
  },
];

storiesOf('UI/Nav/Navbar/Navbar', module)
  .add('Navbar', () => (
    <MemoryRouter>
      <Navbar
          routesData={routesData}
      />
    </MemoryRouter>
  ));
