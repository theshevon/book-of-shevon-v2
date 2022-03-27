import { storiesOf } from '@storybook/react';
import React from 'react';
import { StoryWrapper } from '../../../../../util/storybook/story_wrapper';
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
    <StoryWrapper>
      <Drawer
          routesData={routesData}
          activeRoute='##'
          show={true}
      />
    </StoryWrapper>
  ));
