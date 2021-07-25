import React from 'react';
import { storiesOf } from '@storybook/react';

import { Capsule } from '../ui/capsule/capsule';
import { Text } from '../ui/text/text';

storiesOf('UI/Capsule', module)
  .add('Capsule', () => (
      <div
          style={{ display: 'flex' }}
      >
        <Capsule>
          <Text.Small
              text={'This is a capsule'}
          />
        </Capsule>
      </div>
  ));
