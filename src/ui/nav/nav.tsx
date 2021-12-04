import { observer } from 'mobx-react-lite';
import React from 'react';

import { DisplaySizeObserver, isSmallOrNarrower } from '../../util/display_size_observer/display_size_observer';
import type { RouteData } from './../../routes/route_data/route_data';

import { HamburgerMenu } from './hamburger_menu/hamburger_menu';
import { Navbar } from './navbar/navbar';

type NavProps = {
  routesData: RouteData[],
  activeRoute: string,
}

export const Nav = observer((props: NavProps) => {

  const NavComponent = isSmallOrNarrower(DisplaySizeObserver.size) ? HamburgerMenu : Navbar;

  return (
    <NavComponent
        {...props}
    />
  );
});
