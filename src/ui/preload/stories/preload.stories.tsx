import React from 'react';
import { storiesOf } from '@storybook/react';

import styles from '../preload.module.css';

const PreloadStub = () => (
  <div
      style={{
        height: '100px',
        width: '100px',
      }}
      className={styles.preload}
  >
  </div>
);

storiesOf('UI/Preload', module)
  .add('Preload', () => (
    <PreloadStub/>
  ));
