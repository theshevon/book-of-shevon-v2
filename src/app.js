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
import { Nav as NavImpl } from './ui/nav/nav';
import { createPageContainer } from './ui/page_container/create';
import './app.css';

export const App = () => {

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
  const AboutPage = () => <PageContainer Content={About} withoutTopPaddingForContent={true}/>;
  const ProjectsPage = () => <Projects PageContainer={PageContainer}/>;
  const BlogPage = () => <PageContainer Content={Blog}/>;
  const CreativePage = () => <PageContainer Content={Creative}/>;
  const SnekPage = () => <PageContainer Content={Snek}/>;

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
            component={Error}
        />
      </Switch>
    </Router>
  );
};
