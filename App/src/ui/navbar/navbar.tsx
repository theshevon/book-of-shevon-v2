import React, { useEffect, useState } from 'react';
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

const useFade = (init: boolean) => {

  const [show, setShow] = useState<boolean>(init);
  const [visible, setVisible] = useState<boolean>(show);

  useEffect(() => {
    if (show) setVisible(true); 
  }, [show]);

  const onAnimationEnd = () => {
    if (!setShow) setVisible(false);
  }

  const style = {};

  const fadeProps = {
    style,
    onAnimationEnd,
  }

  return {
    show, 
    visible, 
    setShow, 
    fadeProps
  };
}

export const Navbar = () => {

  const {
    show: menuOpen, 
    visible: menuVisible, 
    setShow: setMenuOpen, 
    fadeProps,
  } = useFade(false);

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
          className={classNames(styles.menuContainerOuter, {
            [styles.withMenuOpen]: menuOpen,
          })}
      >
        <div 
          className={styles.menuContainerInner}
        >
          <Menu
              links={links}/>
        </div>
      </div>
    </div>
  );
}
