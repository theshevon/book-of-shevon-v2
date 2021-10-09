import React from 'react';
import { storiesOf } from '@storybook/react';

import { StoryGroup } from '../../../../../util/storybook/stories';
import { Drawer } from '../drawer';

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
  