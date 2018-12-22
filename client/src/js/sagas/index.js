import { fork } from 'redux-saga/effects';
import initialize from './initialize';
import messageRoot from './message';
import app from './app';

export default function* rootSaga() {
  yield fork(messageRoot);
  yield fork(initialize);
  yield fork(app);
}
