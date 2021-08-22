import React, { useEffect } from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route 
} from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { Projects } from './pages/projects/projects';
import { Nav } from './ui/nav/nav';
import { Routes as routes } from './routes/routes';

const AOS_DURATION_MILLISECONDS = 1500;

export const App = () => {

		useEffect(() => {
			AOS.init({
					duration: AOS_DURATION_MILLISECONDS,
					once: true,
			});
		}, []);

		return (
			<Router>
				<Nav
						routes={routes}
						activeRoute={window.location.pathname}
				/>
				<Switch>
					<Route
              exact
              path='/'
              component={Home}
					/>
					<Route
              exact
              path='/about'
              component={About}
					/>
					<Route
              exact
              path='/projects'
              component={Projects}
					/>
				</Switch>
			</Router>
		);
}
