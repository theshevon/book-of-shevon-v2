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
  </div>
);
