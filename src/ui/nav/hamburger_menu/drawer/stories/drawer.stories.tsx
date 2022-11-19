import { storiesOf } from '@storybook/react';
import React from 'react';
import { StoryWrapper } from '../../../../../util/storybook/story_wrapper';
import { Drawer } from '../drawer';

const routesData = [
  {
    label: (_:any) => 'Route 1',
    path: '#',
    index: -1,
  },
  {
    label: (_:any) => 'Route 2 (Active)',
    path: '##',
    index: 0,
  },
  {
    label: (_:any) => 'Route 3',
    path: '#',
    index: 1,
  },
];

storiesOf('UI/Nav/HamburgerMenu/Drawer', module)
  .add('Drawer', () => (
    <StoryWrapper>
      <Drawer
          routesData={routesData}
          show={true}
      />
    </StoryWrapper>
  ));
