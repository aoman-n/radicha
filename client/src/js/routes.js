import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { hot } from 'react-hot-loader/root';
import Home from './components/containers/HomeContainer';
import AuthContainer from './components/containers/AuthContainer';
import Login from './Login';

const Routes = () => (
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
export default hot(Routes);
