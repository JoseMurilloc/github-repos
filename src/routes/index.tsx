import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import Repository from '../pages/Repository';

/**
 * Switch é o qu evai garantir que tenha o conceito de exclusividade
 * sendo assim só chamamos somente uma rota por vez.
 */
const Routes: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Dashboard} />
      <Route path="/repository" component={Repository} />
    </Switch>
  </BrowserRouter>
)

export default Routes;
