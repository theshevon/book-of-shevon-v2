import React, { useState } from 'react';

import { ToggleMenuButton } from './buttons/toggle_menu_button/toggle_menu_button';
import { Drawer } from './drawer/drawer';
import type { RouteData } from './../../../routes/route_data/route_data';

import styles from './hamburger_menu.module.css';

type HamburgerMenuProps = {
  routesData: RouteData[],
  activeRoute: string,
}

export const HamburgerMenu = ({
  routesData,
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
          routesData={routesData}
          activeRoute={activeRoute}
          show={menuOpen}
      />
    </div>
  );
}
