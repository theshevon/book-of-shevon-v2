import React, { useState } from 'react';
import { observer } from 'mobx-react-lite';
import classNames from 'classnames';

import { Menu } from './menu/menu';
import type { Route } from '../../../routes/routes';
import { ToggleMenuButton } from './buttons/toggle_menu_button/toggle_menu_button';

import styles from './navbar.module.css';
import { DisplaySizeObserver } from '../../../util/display_size_observer';

type NavbarProps = {
  routes: Route[],
  activeRoute: string,
}

export const Navbar = observer(({
  routes,
  activeRoute,
}: NavbarProps) => {

  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const displaySize = DisplaySizeObserver.size;
  return (
    <div
        className={styles.navbarContainer}
    >
      <div
          className={styles.mainNavbar}
      >
        <div>{displaySize}</div>
        <ToggleMenuButton
            menuOpen={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}/>
      </div>
      <div
          className={classNames(styles.menuContainerOuter, {
            [styles.withMenuOpen]: menuOpen,
          })}
      >
        <div 
          className={styles.menuContainerInner}
        >
          <Menu
              routes={routes}
              activeRoute={activeRoute}
          />
        </div>
      </div>
    </div>
  );
});
