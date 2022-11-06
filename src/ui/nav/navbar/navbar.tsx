import classNames from 'classnames';
import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Routes } from '../../../routes/routes';
import { Appearance, Theme, useThemeContext } from '../../../util/theming/theme_provider';
import type { RouteData } from './../../../routes/route_data/route_data';
import { ThemeSwitcherButton } from './buttons/theme_switcher_button/theme_switcher_button';
import { ToggleMenuButton } from './buttons/toggle_menu_button/toggle_menu_button';
import { HorizontalMenu } from './horizontal_menu/horizontal_menu';
import styles from './navbar.module.css';

type NavbarProps = {
  routesData: RouteData[],
}

const getLocationSpecificThemeStyles = (activeRoute: string) => {
  if (activeRoute === Routes.PROJECTS) {
    return styles.projects;
  }
};

export const Navbar = ({
  routesData,
}: NavbarProps) => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);
  const { theme, appearance } = useThemeContext();
  const { pathname: activeRoute } = useLocation();
  return (
    <div
        className={classNames(styles.navbarContainer, {
          [styles.eightBit]: theme === Theme.EIGHT_BIT,
          [styles.dark]: appearance === Appearance.DARK,
        }, getLocationSpecificThemeStyles(activeRoute))}
    >
      <div
          className={styles.mainNavbar}
      >
        <ToggleMenuButton
            menuOpen={menuOpen}
            onClick={toggleMenu}
            activeRoute={activeRoute}
        />
        <ThemeSwitcherButton
            activeRoute={activeRoute}
        />
      </div>
      <div
          className={classNames(styles.menuContainerOuter, {
            [styles.withMenuOpen]: menuOpen,
          })}
      >
        <div
            className={styles.menuContainerInner}
        >
          <HorizontalMenu
              routesData={routesData}
              activeRoute={activeRoute}
          />
        </div>
      </div>
    </div>
  );
};
