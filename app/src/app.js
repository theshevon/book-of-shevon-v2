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
import { Error } from './pages/error/error';

import './app.css';
import { Nav as NavImpl } from './ui/nav/nav';
import { Routes as routes } from './routes/routes';
import { createPageContainer } from './ui/page_container/create';

const AOS_DURATION_MILLISECONDS = 1500;

export const App = () => {

		useEffect(() => {
			AOS.init({
					duration: AOS_DURATION_MILLISECONDS,
					once: true,
			});
		}, []);

		const Nav = () => (
			<NavImpl
					routes={routes}
					activeRoute={window.location.pathname}
			/>
		);

		const PageContainer = createPageContainer(Nav);
		const HomePage = () => <PageContainer Content={Home}/>
		const AboutPage = () => <PageContainer Content={About}/>
		const ProjectsPage = () => <PageContainer Content={Projects}/>

		return (
			<Router>
				<Switch>
					<Route
              exact
              path='/'
              component={HomePage}
					/>
					<Route
              exact
              path='/about'
              component={AboutPage}
					/>
					<Route
              exact
              path='/projects'
              component={ProjectsPage}
					/>
					<Route
              exact
              path='/*'
              component={Error}
					/>
				</Switch>
			</Router>
		);
}
