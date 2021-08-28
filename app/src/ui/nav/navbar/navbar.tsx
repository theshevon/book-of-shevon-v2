import React, { useState } from 'react';
import classNames from 'classnames';

import { HorizontalMenu } from './horizontal_menu/horizontal_menu';
import type { Route } from '../../../routes/routes';
import { ToggleMenuButton } from './buttons/toggle_menu_button/toggle_menu_button';

import styles from './navbar.module.css';

type NavbarProps = {
  routes: Route[],
  activeRoute: string,
}

export const Navbar = ({
  routes,
  activeRoute,
}: NavbarProps) => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);
  return (
    <div
        className={styles.navbarContainer}
    >
      <div
          className={styles.mainNavbar}
      >
        <ToggleMenuButton
            menuOpen={menuOpen}
            onClick={toggleMenu}/>
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
              routes={routes}
              activeRoute={activeRoute}
          />
        </div>
      </div>
    </div>
  );
};
