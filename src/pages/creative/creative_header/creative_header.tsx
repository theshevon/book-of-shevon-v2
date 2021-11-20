import React from 'react';

import { Text } from '../../../ui/text/text';

import { CreativeHeaderMessages as Messages } from './creative_header.messages';

import styles from './creative_header.module.css';

export const CreativeHeader = () => (
  <div
      className={styles.creativeHeader}
  >
    <Text.LargeTitle
        alignment='center'
        className={styles.title}
    >
      { Messages.title() }
    </Text.LargeTitle>
    <Text.Small
        alignment='center'
        fontWeight='light'
        className={styles.subtitle}
    >
      { Messages.subtitle() }
    </Text.Small>
  </div>
);
