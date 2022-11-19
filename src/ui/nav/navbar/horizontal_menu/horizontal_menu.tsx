import classNames from 'classnames';
import React from 'react';
import { Link } from 'react-router-dom';
import { Routes } from '../../../../routes/routes';
import { useLocaleContext } from '../../../../util/localisation/locale_provider';
import { Appearance, Theme, useThemeContext } from '../../../../util/theming/theme_provider';
import type { RouteData } from './../../../../routes/route_data/route_data';
import styles from './horizontal_menu.module.css';

type HorizontalMenuProps = {
  routesData: RouteData[],
  activeRoute: string,
}

const getLocationSpecificThemeStyles = (activeRoute: string) => {
  if (activeRoute === Routes.PROJECTS) {
    return styles.projects;
  }
};

export const HorizontalMenu = ({
  routesData,
  activeRoute,
}: HorizontalMenuProps) => {
  const { locale } = useLocaleContext();
  const { theme, appearance } = useThemeContext();
  return (
    <ul
        className={styles.horizontalMenu}
    >
      { routesData.map(routeData => (
        <li
            key={routeData.path}
            className={styles.linkContainer}
        >
          <Link
              to={routeData.path}
              className={classNames(styles.link, {
                [styles.active]: routeData.path === activeRoute,
                [styles.eightBit]: theme === Theme.EIGHT_BIT,
                [styles.dark]: appearance === Appearance.DARK,
              }, getLocationSpecificThemeStyles(activeRoute))}
          >
            { routeData.label(locale) }
          </Link>
        </li>
      )) }
    </ul>
  );
};
