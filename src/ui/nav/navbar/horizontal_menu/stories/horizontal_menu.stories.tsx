import React from 'react';
import { storiesOf } from '@storybook/react';

import { StoryGroup } from '../../../../../util/storybook/stories';
import { HorizontalMenu } from '../horizontal_menu';

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

storiesOf('UI/Nav/Navbar/HorizontalMenu', module)
  .add('HorizontalMenu', () => (
    <StoryGroup>
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
            activeRoute='##'
        />
      </div>
    </StoryGroup>
  ));
