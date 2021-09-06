import React from 'react';

import { Nav } from './../../ui/nav/nav';
import { Routes as routes } from './../../routes/routes';

import styles from './page_container.module.css';

export const PageContainer = ({
  Content,
}: {
  Content: () => JSX.Element,
}) => (
  <div
      className={styles.pageContainer}
  >
    <Nav
        routes={routes}
        activeRoute={window.location.pathname}
    />
    <div
        className={styles.pageContent}
    >
      <Content />
    </div>
  </div>
);
