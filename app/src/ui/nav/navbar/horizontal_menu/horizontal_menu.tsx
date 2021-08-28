import React from 'react';
import classNames from 'classnames';

import type { Route } from './../../../../routes/routes';
import styles from './horizontal_menu.module.css';

type HorizontalMenuProps = {
  routes: Route[],
  activeRoute: string,
}

export const HorizontalMenu = ({
  routes,
  activeRoute,
}: HorizontalMenuProps) => (
  <ul
      className={styles.horizontalMenu}    
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
);
