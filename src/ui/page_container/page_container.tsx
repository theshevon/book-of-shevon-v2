import classNames from 'classnames';
import React from 'react';
import { Appearance, useThemeContext } from '../../util/theming/theme_provider';
import styles from './page_container.module.css';

export const PageContainer = ({
  Content,
  pageBackgroundStyles,
}: {
  Content: () => JSX.Element,
  pageBackgroundStyles?: string,
}) => {
  const { appearance } = useThemeContext();
  return (
    <div
        className={classNames(styles.pageContainer, pageBackgroundStyles, {
          [styles.dark]: appearance === Appearance.DARK,
        })}
    >
      <div
          className={styles.pageContent}
      >
        <Content />
      </div>
    </div>
  );
};
