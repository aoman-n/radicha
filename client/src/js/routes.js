import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import Home from './components/presentators/Home';

export default () => (
  <BrowserRouter>
    <Route path="/" component={Home} />
  </BrowserRouter>
);
