import React from 'react';
import { storiesOf } from '@storybook/react';

import { Capsule } from '../ui/capsule/capsule';

storiesOf('UI/Capsule', module)
  .add('Capsule', () => (
      <div
          style={{ display: 'flex' }}
      >
        <Capsule
            text={'These'}
        />
        <Capsule
            text={'are'}
        />
        <Capsule
            text={'some'}
        />
        <Capsule
            text={'capsules'}
        />
      </div>
  ));
