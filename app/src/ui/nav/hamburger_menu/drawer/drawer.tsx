import React from 'react';
import classNames from 'classnames';

import type { RouteData } from './../../../../routes/route_data/route_data';

import styles from './drawer.module.css';

type DrawerProps = {
  routesData: RouteData[],
  activeRoute: string,
  show: boolean,
}

export const Drawer = ({
  routesData,
  activeRoute,
  show,
}: DrawerProps) => (
  <div
      className={classNames(styles.drawer, {[styles.show]: show})}
  >
    <ul
        className={styles.verticalMenu}    
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
      ))}
    </ul>
  </div>
);
