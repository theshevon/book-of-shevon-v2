import { storiesOf } from '@storybook/react';
import React from 'react';
import { TechCapsule } from '../tech_capsule';

storiesOf('pages/Projects/TechCapsule', module)
  .add('TechCapsule', () => (
    <div
        style={{ display: 'flex', flexWrap: 'wrap', gap: '5px' }}
    >
      <TechCapsule
          tech='Python'
      />
      <TechCapsule
          tech='C#'
      />
      <TechCapsule
          tech='Java'
      />
      <TechCapsule
          tech='HTML'
      />
      <TechCapsule
          tech='CSS'
      />
      <TechCapsule
          tech='Javascript'
      />
      <TechCapsule
          tech='React'
      />
      <TechCapsule
          tech='Redux'
      />
      <TechCapsule
          tech='MobX'
      />
      <TechCapsule
          tech='MongoDB'
      />
      <TechCapsule
          tech='MySql'
      />
      <TechCapsule
          tech='Git'
      />
      <TechCapsule
          tech='Firebase'
      />
      <TechCapsule
          tech='jQuery'
      />
      <TechCapsule
          tech='Node'
      />
      <TechCapsule
          tech='Android Studio'
      />
      <TechCapsule
          tech='Unity'
      />
    </div>
  ));
