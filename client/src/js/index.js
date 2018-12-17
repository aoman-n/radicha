import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import createStore from './store';
import Routes from './routes';
import '../css/reset.css';

const store = createStore();

ReactDOM.render(  
  <Provider store={store}>
    <Routes />
  </Provider>,
  document.getElementById('root')
);
