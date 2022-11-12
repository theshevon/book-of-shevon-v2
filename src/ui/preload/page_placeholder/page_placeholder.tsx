import classNames from 'classnames';
import React from 'react';
import { Appearance, useThemeContext } from '../../../util/theming/theme_provider';
import styles from './page_placeholder.module.css';

export const PagePlaceholder = () => {
  const { appearance } = useThemeContext();
  return (
    <div className={classNames(styles.container, {
      [styles.dark]: appearance === Appearance.DARK,
    })}>
      <div className={styles.spinner}></div>
    </div>
  );
};

