import classNames from 'classnames';
import React from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from '../../../link/link';
import type { RouteData } from './../../../../routes/route_data/route_data';
import styles from './drawer.module.css';

type DrawerProps = {
  routesData: RouteData[],
  show: boolean,
}

export const Drawer = ({
  routesData,
  show,
}: DrawerProps) => {
  const { pathname: activeRoute } = useLocation();
  return (
    <div
        className={classNames(styles.drawer, { [styles.show]: show })}
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
                url={routeData.path}
                className={classNames(styles.link, {
                  [styles.active]: routeData.path === activeRoute,
                })}
                targetSelf={true}
            >
              { routeData.label }
            </Link>
          </li>
        )) }
      </ul>
    </div>
  );};
