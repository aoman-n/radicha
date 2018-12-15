import { createStore as reduxCreateStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
import reducer from './reducers';
import rootSaga from './sagas';

export default function createStore(initialState) {
  const sagaMiddleware = createSagaMiddleware();
  const store = reduxCreateStore(
    reducer,
    initialState,
    applyMiddleware(logger, sagaMiddleware)
  );
  sagaMiddleware.run(rootSaga);
  return store;
}
