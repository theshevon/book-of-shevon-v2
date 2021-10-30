import React from 'react';
import classNames from 'classnames';

import type { RouteData } from 'routes/route_data/route_data';
import { Link } from 'ui/link/link';

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
          <Link
              url={routeData.pathname}
              className={classNames(styles.link, {
                [styles.active]: routeData.pathname === activeRoute,
              })}
              targetSelf={true}
          >
              {routeData.label}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);
