import classNames from 'classnames';
import React from 'react';
import { Theme, useThemeContext } from '../../../../util/theming/theme_provider';
import type { RouteData } from './../../../../routes/route_data/route_data';
import styles from './horizontal_menu.module.css';

type HorizontalMenuProps = {
  routesData: RouteData[],
  activeRoute: string,
}

export const HorizontalMenu = ({
  routesData,
  activeRoute,
}: HorizontalMenuProps) => {
  const { theme } = useThemeContext();
  return (
    <ul
        className={styles.horizontalMenu}
    >
      { routesData.map(routeData => (
        <li
            key={routeData.label}
            className={styles.linkContainer}
        >
          <a
              href={routeData.path}
              className={classNames(styles.link, {
                [styles.active]: routeData.path === activeRoute,
                [styles.eightBit]: theme === Theme.EIGHT_BIT,
              })}
          >
            { routeData.label }
          </a>
        </li>
      )) }
    </ul>
  );
};
