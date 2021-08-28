import React, { useState } from 'react';

import { ToggleMenuButton } from './buttons/toggle_menu_button/toggle_menu_button';
import { Drawer } from './drawer/drawer';
import type { Route } from './../../../routes/routes';

import styles from './hamburger_menu.module.css';

type HamburgerMenuProps = {
  routes: Route[],
  activeRoute: string,
}

export const HamburgerMenu = ({
  routes,
  activeRoute,
}: HamburgerMenuProps) => {
  const [menuOpen, setMenuOpen] = useState<boolean>(true);
  const toggleMenu = () => setMenuOpen(!menuOpen);
  return (
    <div
        className={styles.hamburgerMenu}
    >
      <div
          className={styles.toggleButtonContainer}
      >
        <ToggleMenuButton
            menuOpen={menuOpen}
            onClick={toggleMenu}
        />
      </div>
      <Drawer
          routes={routes}
          activeRoute={activeRoute}
          show={menuOpen}
      />
    </div>
  );
}
