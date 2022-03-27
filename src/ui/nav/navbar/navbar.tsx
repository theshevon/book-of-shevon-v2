import classNames from 'classnames';
import React, { useState } from 'react';
import { Theme, useThemeContext } from '../../../util/theming/theme_provider';
import type { RouteData } from './../../../routes/route_data/route_data';
import { ThemeSwitcherButton } from './buttons/theme_switcher_button/theme_switcher_button';
import { ToggleMenuButton } from './buttons/toggle_menu_button/toggle_menu_button';
import { HorizontalMenu } from './horizontal_menu/horizontal_menu';
import styles from './navbar.module.css';

type NavbarProps = {
  routesData: RouteData[],
  activeRoute: string,
}

export const Navbar = ({
  routesData,
  activeRoute,
}: NavbarProps) => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);
  const { theme } = useThemeContext();
  return (
    <div
        className={classNames(styles.navbarContainer, {
          [styles.eightBit]: theme === Theme.EIGHT_BIT,
        })}
    >
      <div
          className={styles.mainNavbar}
      >
        <ToggleMenuButton
            menuOpen={menuOpen}
            onClick={toggleMenu}
        />
        <ThemeSwitcherButton/>
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
