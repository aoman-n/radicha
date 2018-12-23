import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/containers/HomeContainer';
import AuthContainer from './components/containers/AuthContainer';
import Login from './Login';

export default () => (
  <div>
    {/* <Switch>
      <Route exact path="/login" component={Login} />
        <AuthContainer>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </AuthContainer>
    </Switch> */}
    <Switch>
      <Route path="/" component={Home} />
    </Switch>
  </div>
);
