import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Header from './components/Header';
import index from './pages';
import Features from './pages/Features';

const routes = [{
  path: '/',
  name: 'Home',
  component: index,
  exact: true,
},
{
  path: '/features',
  name: 'Features',
  component: Features,
  exact: true,
}];

const Routes = () => (
  <BrowserRouter>
    <Header title="PITANG 2" routes={routes} />
    <Switch>
      {routes.map(({ component, path, exact }) => (
        <Route
          key={path}
          path={path}
          component={component}
          exact={exact}
        />
      ))}
    </Switch>
  </BrowserRouter>
);

export default Routes;
