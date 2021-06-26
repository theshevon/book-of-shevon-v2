import React from 'react';

import { Routes } from './routes/routes';
import { Navbar } from './navbar/navbar';

export const createNavbar = ({
  activeRoute,
}: {
  activeRoute: string,
}) => (
  <Navbar
      routes={Routes}
      activeRoute={activeRoute}
  />
);
