import React from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route 
} from 'react-router-dom';

import { Home } from './pages/home/home';
import { About as oldAbout } from './pages/about/oldAbout';
import { About as newAbout } from './pages/about/about';
import { createNavbar } from './ui/navbar/create';
import { Routes as routes } from './routes/routes';

export const App = () => {

		const Navbar = createNavbar({
			routes,
			// TODO: replace this with actual link
			activeRoute: '/',
		});

		return (
			<Router>
				{Navbar}
				<Switch>
					<Route
              exact
              path='/'
              component={Home}
					/>
					<Route
              exact
              path='/old-about'
              component={oldAbout}
					/>
					<Route
              exact
              path='/new-about'
              component={newAbout}
					/>
				</Switch>
			</Router>
		);
}