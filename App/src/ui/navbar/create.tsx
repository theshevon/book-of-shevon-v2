import React from 'react';

import type { Route } from '../../routes/routes';
import { Navbar } from './navbar/navbar';

export const createNavbar = ({
  routes,
  activeRoute,
}: {
  routes: Route[],
  activeRoute: string,
}) => {
  const sortedRoutes = routes.sort((route1, route2) => route1.index - route2.index);
  return (
    <Navbar
      routes={sortedRoutes}
      activeRoute={activeRoute}
    />
  );
}
