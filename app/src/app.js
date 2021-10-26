import React, { useEffect } from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route 
} from 'react-router-dom';
import AOS from 'aos';

import { Nav as NavImpl } from './ui/nav/nav';
import { Routes } from './routes/routes';
import { RoutesData } from './routes/route_data/route_data';
import { createPageContainer } from './ui/page_container/create';

import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { Projects } from './pages/projects/projects';
import { Blog } from './pages/blog/blog';
import { Error } from './pages/error/error';

import { AppMessages as Messages } from './app.messages';

import './app.css';
import 'aos/dist/aos.css';

const AOS_DURATION_MILLISECONDS = 1500;

export const App = () => {

		useEffect(() => {
			AOS.init({
					duration: AOS_DURATION_MILLISECONDS,
					once: true,
			});
		}, []);

		console.log(Messages.consoleGreetingImg(Messages.consoleGreetingMessage()));

		const Nav = () => (
			<NavImpl
					routesData={RoutesData}
					activeRoute={window.location.pathname}
			/>
		);

		const PageContainer = createPageContainer(Nav);
		const HomePage = () => <PageContainer Content={Home}/>
		const AboutPage = () => <PageContainer Content={About}/>
		const ProjectsPage = () => <PageContainer Content={Projects}/>
		const BlogPage = () => <PageContainer Content={Blog}/>
		
		return (
			<Router>
				<Switch>
					<Route
              exact
              path={Routes.HOME}
              component={HomePage}
					/>
					<Route
              exact
              path={Routes.ABOUT}
              component={AboutPage}
					/>
					<Route
              exact
              path={Routes.PROJECTS}
              component={ProjectsPage}
					/>
					<Route
              exact
              path={Routes.BLOG}
              component={BlogPage}
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
