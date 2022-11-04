import React from 'react';
import {
  Route,
  BrowserRouter as Router,
  Switch,
} from 'react-router-dom';
import { AppMessages as Messages } from './app.messages';
import { About } from './pages/about/about';
import { Blog } from './pages/blog/blog';
import { Creative } from './pages/creative/creative';
import { Error } from './pages/error/error';
import { Home } from './pages/home/home';
import { Projects } from './pages/projects/projects';
import { Snek } from './pages/snek/snek';
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
            component={Home}
        />
        <Route
            exact
            path={Routes.ABOUT}
            component={About}
        />
        <Route
            exact
            path={Routes.PROJECTS}
            component={Projects}
        />
        <Route
            exact
            path={Routes.BLOG}
            component={Blog}
        />
        <Route
            exact
            path={Routes.CREATIVE}
            component={Creative}
        />
        <Route
            exact
            path={Routes.SNEK}
            component={Snek}
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
