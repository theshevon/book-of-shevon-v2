import React, { useState } from 'react';
import type { RouteData } from './../../../routes/route_data/route_data';
import { ToggleMenuButton } from './buttons/toggle_menu_button/toggle_menu_button';
import { Drawer } from './drawer/drawer';
import styles from './hamburger_menu.module.css';

type HamburgerMenuProps = {
  routesData: RouteData[],
}

export const HamburgerMenu = ({
  routesData,
}: HamburgerMenuProps) => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);
  return (
    <div
        className={styles.hamburgerMenu}
    >
      <div
          className={styles.toggleButtonContainer}
      >
        <ToggleMenuButton
            routesData={routesData}
            menuOpen={menuOpen}
            onClick={toggleMenu}
        />
      </div>
      <Drawer
          routesData={routesData}
          show={menuOpen}
      />
    </div>
  );
};
