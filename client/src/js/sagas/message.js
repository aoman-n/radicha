import {
  take, put, fork, takeEvery, select, call,
} from 'redux-saga/effects';
import io from 'socket.io-client';
import { eventChannel } from 'redux-saga';
import * as actions from '../actions';
import config from '../config';

function subscribe(socket) {
  return eventChannel((emit) => {
    socket.on('message', (msg) => {
      emit(actions.receiveMessage(msg));
    });
    return () => {};
  });
}

function* receiveMessage() {
  const socket = yield select(state => state.message.socket);
  if (socket) {
    const channel = yield call(subscribe, socket);
    while (true) {
      const action = yield take(channel);
      console.log('action:', action);
      yield put(action);
    }
  }
}

function* runCreateConnection() {
  const socket = io(config.url);
  yield put(actions.setSocket(socket));
  yield fork(receiveMessage);
}

function* connection() {
  yield takeEvery(actions.CREATE_CONNECTION, runCreateConnection);
}

function* sendMessage() {
  while (true) {
    const { payload } = yield take(actions.SENT_MESSAGE);
    const { socket } = yield select(state => state.message);
    socket.emit('message', payload);
  }
}

export default function* () {
  yield fork(connection);
  yield fork(sendMessage);
}
