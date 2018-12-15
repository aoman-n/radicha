import React from 'react';
import { Route, Switch } from 'react-router-dom';
// import Home from './components/containers/HomeContainer';
import Home from './components/containers/HomeContainer';

export default () => (
  <Switch>
    <Route exact path="/" component={Home} />
  </Switch>
);
