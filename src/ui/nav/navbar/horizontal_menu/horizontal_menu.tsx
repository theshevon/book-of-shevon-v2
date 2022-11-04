import classNames from 'classnames';
import React from 'react';
import { Link , useLocation } from 'react-router-dom';
import { Theme, useThemeContext } from '../../../../util/theming/theme_provider';
import type { RouteData } from './../../../../routes/route_data/route_data';
import styles from './horizontal_menu.module.css';

type HorizontalMenuProps = {
  routesData: RouteData[],
}

export const HorizontalMenu = ({
  routesData,
}: HorizontalMenuProps) => {
  const { theme } = useThemeContext();
  const { pathname } = useLocation();
  return (
    <ul
        className={styles.horizontalMenu}
    >
      { routesData.map(routeData => (
        <li
            key={routeData.label}
            className={styles.linkContainer}
        >
          <Link
              to={routeData.path}
              className={classNames(styles.link, {
                [styles.active]: routeData.path === pathname,
                [styles.eightBit]: theme === Theme.EIGHT_BIT,
              })}
          >
            { routeData.label }
          </Link>
        </li>
      )) }
    </ul>
  );
};
