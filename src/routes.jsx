import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import caixaGrupo from './components/Card_grupo';
import Header from './components/Header';
import index from './pages';
import App from './pages/atividade4';

const routes = [{
  path: '/Reactex/home',
  name: 'Home',
  component: index,
  exact: true,
}, {
  path: '/Reactex/grupo',
  name: 'Grupo',
  component: caixaGrupo,
  exact: true,
}, {
  path: '/Reactex/atividade4',
  name: 'Atividade 4',
  component: App,
  exact: true,
}];

const Routes = () => (
  <BrowserRouter>
    <Header title="PITANG 2" to="/Reactex/home" routes={routes} />
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
