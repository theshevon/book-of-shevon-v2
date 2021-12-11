import { select } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { THEMES } from '../../../util/theming/theme_provider';
import { Capsule } from '../capsule';

storiesOf('UI/Capsule', module)
  .add('Capsule', () => (
    <div
        style={{ display: 'flex' }}
    >
      <Capsule
          theme={select('theme', THEMES, THEMES[0]).theme}
      >
        Capsule
      </Capsule>
    </div>
  ));
