import React from 'react';

import { Text } from './../../../ui/text/text';

import { BlogMessages as Messages } from './../blog.messages';

import HeaderImg from './blog_header_img.jpeg';
import styles from './blog_header.module.css';

export const BlogHeader = () => (
  <div
      className={styles.blogHeader}
  >
    <img
        className={styles.backgroundImg}
        src={HeaderImg}
        alt='lofi girl'
    />
    <div
        className={styles.textContainer}
    >
      <Text.LargeTitle>{Messages.pageTitle()}</Text.LargeTitle>
    </div>
  </div>
);
