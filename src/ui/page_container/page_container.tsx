import classNames from 'classnames';
import React from 'react';
import styles from './page_container.module.css';

export const PageContainer = ({
  Content,
  pageBackgroundStyles,
}: {
  Content: () => JSX.Element,
  pageBackgroundStyles?: string,
}) => (
  <div
      className={classNames(styles.pageContainer, pageBackgroundStyles)}
  >
    <div
        className={styles.pageContent}
    >
      <Content />
    </div>
  </div>
);
