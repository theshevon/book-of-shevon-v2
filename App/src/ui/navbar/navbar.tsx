import React, { useState } from 'react';
import classNames from 'classnames';

import { Menu } from './menu/menu';
import { MenuButton } from './menu_button/menu_button';

import styles from './navbar.module.css';

const links = [
  {
    label: 'About',
    route: '#',
    active: false,
  },
  {
    label: 'Home',
    route: '#',
    active: true,
  },
  {
    label: 'Blog',
    route: '#',
    active: false,
  }
]

export const Navbar = () => {

  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  
  return (
    <div
        className={styles.navbarContainer}  
    >
      <div
          className={styles.mainNavbar}
      >
        <MenuButton
            menuOpen={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}/>
      </div>
      <div
          className={classNames(styles.menuContainer, {
            [styles.withMenuOpen]: menuOpen,
          })}
      >
        <Menu
            links={links}/>
      </div>
    </div>
  );
}
