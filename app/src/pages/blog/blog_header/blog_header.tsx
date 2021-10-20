import React from 'react';

import { Text } from './../../../ui/text/text';

import { BlogHeaderMessages as Messages } from './blog_header.messages';

import styles from './blog_header.module.css';

export const BlogHeader = () => (
  <div
      className={styles.blogHeader}
  >
    <div
        className={styles.textContainer}
    >
      <Text.LargeTitle>{Messages.title()}</Text.LargeTitle>
      <Text.Small>{Messages.subtitle()}</Text.Small>
    </div>
  </div>
);
