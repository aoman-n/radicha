import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Router } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import '../css/reset.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import {
  faCheckSquare,
  faCoffee,
  faBars,
  faVolumeUp,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import Routes from './Routes';
import createStore from './store';

library.add(fab, faCheckSquare, faCoffee, faBars, faVolumeUp, faUser);

const history = createHistory();
const store = createStore(history);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Routes />
    </Router>
  </Provider>,
  document.getElementById('root'),
);
