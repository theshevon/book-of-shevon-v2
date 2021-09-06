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
    {/* TODO: The UI should be agnostic to the data. Therefore, the route data should be passed into this component  */}
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
