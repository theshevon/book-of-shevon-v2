import React from 'react';
import {
  Route,
  BrowserRouter as Router,
  Switch,
} from 'react-router-dom';
import { AppMessages as Messages } from './app.messages';
import { AboutPage } from './pages/about/lazy_about';
import { BlogPage } from './pages/blog/lazy_blog';
import { CreativePage } from './pages/creative/lazy_creative';
import { ErrorPage } from './pages/error/lazy_error';
import { Home as HomePage } from './pages/home/home';
import { ProjectsPage } from './pages/projects/lazy_projects';
import { SnekPage } from './pages/snek/lazy_snek';
import { RoutesData } from './routes/route_data/route_data';
import { Routes } from './routes/routes';
import { Nav } from './ui/nav/nav';
import './app.css';

export const App = () => {

  // eslint-disable-next-line no-console
  console.log(Messages.consoleGreetingImg(Messages.consoleGreetingMessage()));

  return (
    <Router>
      <Nav routesData={RoutesData}/>
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
            path={Routes.CREATIVE}
            component={CreativePage}
        />
        <Route
            exact
            path={Routes.SNEK}
            component={SnekPage}
        />
        <Route
            exact
            path='/*'
            component={ErrorPage}
        />
      </Switch>
    </Router>
  );
};
