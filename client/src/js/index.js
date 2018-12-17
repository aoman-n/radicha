import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import createStore from './store';
import Routes from './routes';
import '../css/reset.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee, faBars } from '@fortawesome/free-solid-svg-icons'

library.add(fab, faCheckSquare, faCoffee, faBars)

const store = createStore();

ReactDOM.render(  
  <Provider store={store}>
    <Routes />
  </Provider>,
  document.getElementById('root')
);
