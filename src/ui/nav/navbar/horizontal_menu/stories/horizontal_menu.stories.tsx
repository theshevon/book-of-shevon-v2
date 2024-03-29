import { storiesOf } from '@storybook/react';
import React from 'react';
import { StoryWrapper } from '../../../../../util/storybook/story_wrapper';
import { HorizontalMenu } from '../horizontal_menu';

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

storiesOf('UI/Nav/Navbar/HorizontalMenu', module)
  .add('HorizontalMenu', () => (
    <StoryWrapper
        title='Route 2 is the active route'
    >
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
            activeRoute='#'
        />
      </div>
    </StoryWrapper>
  ));
