import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
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
import Routes from './routes';
import createStore from './store';

library.add(fab, faCheckSquare, faCoffee, faBars, faVolumeUp, faUser);

const store = createStore();

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
);
