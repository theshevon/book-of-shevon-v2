import { storiesOf } from '@storybook/react';
import React from 'react';
import { Capsule } from '../capsule';

storiesOf('UI/Capsule', module)
  .add('Capsule', () => (
    <div
        style={{ display: 'flex' }}
    >
      <Capsule>
        Capsule
      </Capsule>
    </div>
  ));
