import React from 'react';
import type { FC } from 'react';
import styles from './story_wrapper.module.css';

export const StoryWrapper: FC<{ title?: string }> = ({
  title,
  children,
}) => (
  <div
      className={styles.storyWrapper}
  >
    { title && (
      <div
          className={styles.titleContainer}
      >
        { title }
      </div>
    ) }
    { children }
  </div>
);
