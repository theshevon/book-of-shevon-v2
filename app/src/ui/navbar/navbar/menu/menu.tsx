import React from 'react';
import classNames from 'classnames';

import { Route } from '../../../../routes/routes';
import styles from './menu.module.css';

type MenuProps = {
  routes: Route[],
  activeRoute: string,
}

export const Menu = ({
  routes,
  activeRoute,
}: MenuProps) => (
  <ul
      className={styles.menu}    
  >
    { routes.map(route => (
      <li
          key={route.label}
          className={styles.linkContainer}
      >
        <a
            href={route.route}
            className={classNames(styles.link, {
              // TODO: make this observable so it updates correctly
              [styles.active]: route.route === activeRoute,
            })}
        >
            { route.label }
        </a>
      </li>
    ))}
  </ul>
);
