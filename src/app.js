import AOS from 'aos';
import React, { useEffect } from 'react';
import {
  Route,
  BrowserRouter as Router,
  Switch,
} from 'react-router-dom';

import { AppMessages as Messages } from './app.messages';
import { About } from './pages/about/about';
import { Blog } from './pages/blog/blog';
import { Error } from './pages/error/error';
import { Home } from './pages/home/home';
import { Projects } from './pages/projects/projects';
import { RoutesData } from './routes/route_data/route_data';
import { Routes } from './routes/routes';
import { Nav as NavImpl } from './ui/nav/nav';
import { createPageContainer } from './ui/page_container/create';

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

  // eslint-disable-next-line no-console
  console.log(Messages.consoleGreetingImg(Messages.consoleGreetingMessage()));

  const Nav = () => (
    <NavImpl
        routesData={RoutesData}
        activeRoute={window.location.pathname}
    />
  );

  const PageContainer = createPageContainer(Nav);
  const HomePage = () => <PageContainer Content={Home}/>;
  const AboutPage = () => <PageContainer Content={About}/>;
  const ProjectsPage = () => <PageContainer Content={Projects}/>;
  const BlogPage = () => <PageContainer Content={Blog}/>;

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
};
