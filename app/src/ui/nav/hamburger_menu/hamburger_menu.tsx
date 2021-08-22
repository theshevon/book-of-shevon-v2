import React, { useState } from 'react';

import { ToggleMenuButton } from './buttons/toggle_menu_button';
import type { Route } from './../../../routes/routes';

import styles from './hamburger.module.css';

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
    <div>
      <ToggleMenuButton
          menuOpen={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
      />
    </div>
  )
}
