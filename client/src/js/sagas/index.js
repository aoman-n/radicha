import { fork } from 'redux-saga/effects';
import messageRoot from './message';

export default function* rootSaga() {
  yield fork(messageRoot);
};
