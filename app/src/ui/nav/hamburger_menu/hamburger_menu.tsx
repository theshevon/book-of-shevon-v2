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
  const toggleMenu = () => {
    if (menuOpen) {
      setMenuOpen(false);
    } else {
      setMenuOpen(true);
    }
  }

  return (
    <div
        className={styles.hamburgerMenu}
    >
      <ToggleMenuButton
          menuOpen={menuOpen}
          onClick={toggleMenu}
      />
      <Drawer
          routes={routes}
          activeRoute={activeRoute}
          show={menuOpen}
      />
    </div>
  );
}
