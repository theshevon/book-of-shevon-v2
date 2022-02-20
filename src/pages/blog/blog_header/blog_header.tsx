import classNames from 'classnames';
import React from 'react';
import { Theme, useThemeContext } from '../../../util/theming/theme_provider';
import { Text } from './../../../ui/text/text';
import { BlogHeaderMessages as Messages } from './blog_header.messages';
import styles from './blog_header.module.css';

export const BlogHeader = () => {
  const { theme } = useThemeContext();
  return (
    <div
        className={classNames(styles.blogHeader, {
          [styles.eightBit]: theme === Theme.EIGHT_BIT,
        })}
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
};
