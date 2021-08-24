import React, { useState } from 'react';

import { ToggleMenuButton } from './buttons/toggle_menu_button';
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
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  return (
    <div
        className={styles.hamburgerMenu}
    >
      <ToggleMenuButton
          menuOpen={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
      />
      <Drawer
          routes={routes}
          activeRoute={activeRoute}
          show={menuOpen}
      />
    </div>
  );
}
