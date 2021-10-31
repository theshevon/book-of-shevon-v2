import classNames from 'classnames';
import React from 'react';

import type { RouteData } from 'routes/route_data/route_data';
import styles from './horizontal_menu.module.css';

type HorizontalMenuProps = {
  routesData: RouteData[],
  activeRoute: string,
}

export const HorizontalMenu = ({
  routesData,
  activeRoute,
}: HorizontalMenuProps) => (
  <ul
      className={styles.horizontalMenu}
  >
    { routesData.map(routeData => (
      <li
          key={routeData.label}
          className={styles.linkContainer}
      >
        <a
            href={routeData.pathname}
            className={classNames(styles.link, {
              [styles.active]: routeData.pathname === activeRoute,
            })}
        >
          { routeData.label }
        </a>
      </li>
    )) }
  </ul>
);
