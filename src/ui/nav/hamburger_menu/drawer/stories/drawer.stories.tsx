import { storiesOf } from '@storybook/react';
import React from 'react';

import { StoryGroup } from '../../../../storybook/stories';
import { Drawer } from '../drawer';

const routesData = [
  {
    label: 'Route 1',
    path: '#',
    index: -1,
  },
  {
    label: 'Route 2 (Active)',
    path: '##',
    index: 0,
  },
  {
    label: 'Route 3',
    path: '#',
    index: 1,
  },
];

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
