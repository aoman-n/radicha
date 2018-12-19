import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import Home from './components/containers/HomeContainer';

export default () => (
  <BrowserRouter>
    <Route path="/" component={Home} />
  </BrowserRouter>
);
