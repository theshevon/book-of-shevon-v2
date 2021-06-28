import React from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route 
} from 'react-router-dom';

import { Home } from './pages/home/home';
import { About } from './pages/about/about';
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
					>
					</Route>
					<Route
              exact
              path='/about'
              component={About}
					>
					</Route>
				</Switch>
			</Router>
		)
}
