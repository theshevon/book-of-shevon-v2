import React from 'react';
import styles from './page_container.module.css';

export const PageContainer = ({
  Nav,
  Content,
}: {
  Nav: () => JSX.Element,
  Content: () => JSX.Element,
}) => (
  <div
      className={styles.pageContainer}
  >
    <Nav />
    <div
        className={styles.pageContent}
    >
      <Content />
    </div>
  </div>
);
