import classNames from 'classnames';
import React from 'react';
import type { Route } from '../../../../routes/routes';

import styles from './drawer.module.css';

type DrawerProps = {
  routes: Route[],
  activeRoute: string,
  show: boolean,
}

export const Drawer = ({
  routes,
  activeRoute,
  show,
}: DrawerProps) => {
  return (
    <div
        className={classNames(styles.drawer, {[styles.show]: show})}
    >
      <ul
          className={styles.verticalMenu}    
      >
        { routes.map(route => (
          <li
              key={route.label}
              className={styles.linkContainer}
          >
            <a
                href={route.route}
                className={classNames(styles.link, {
                  [styles.active]: route.route === activeRoute,
                })}
            >
                { route.label }
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
