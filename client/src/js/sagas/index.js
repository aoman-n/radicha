import { fork } from 'redux-saga/effects';
import initialize from './initialize';
import chatRoom from './chatRoom';
import app from './app';

export default function* rootSaga(context) {
  yield fork(chatRoom);
  yield fork(initialize);
  yield fork(app, context);
}
