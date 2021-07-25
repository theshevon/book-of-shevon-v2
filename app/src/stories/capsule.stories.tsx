import React from 'react';
import { storiesOf } from '@storybook/react';

import { Capsule } from '../ui/capsule/capsule';

storiesOf('UI/Capsule', module)
  .add('Capsule', () => (
      <div
          style={{ display: 'flex' }}
      >
        <Capsule
            content={'These'}
        />
        <Capsule
            content={'are'}
        />
        <Capsule
            content={'some'}
        />
        <Capsule
            content={'capsules'}
        />
      </div>
  ));
