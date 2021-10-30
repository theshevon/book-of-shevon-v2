import React from 'react';
import { observer } from 'mobx-react-lite';

import type { RouteData } from 'routes/route_data/route_data';

import { HamburgerMenu } from './hamburger_menu/hamburger_menu';
import { Navbar } from './navbar/navbar';
import { DisplaySizeObserver } from 'util/display_size_observer';

type NavProps = {
  routesData: RouteData[],
  activeRoute: string,
}

export const Nav = observer((props: NavProps) => {
  
  const displaySize = DisplaySizeObserver.size;
  const NavComponent = displaySize === 'small' ? HamburgerMenu : Navbar;

  return (
    <NavComponent
        {...props}
    />
  );
});
