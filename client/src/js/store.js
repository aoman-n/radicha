import { createStore as reduxCreateStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { createLogger } from 'redux-logger';
import reducers from './reducers';
import rootSaga from './sagas';

export default function createStore() {
  const sagaMiddleware = createSagaMiddleware();
  const middlewares = [sagaMiddleware, createLogger()];

  /* eslint "no-underscore-dangle": 0 */
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;
  const enhancer = composeEnhancers(applyMiddleware(...middlewares));
  const store = reduxCreateStore(reducers, enhancer);
  sagaMiddleware.run(rootSaga);
  return store;
}
