import {
  fork, take, call, put, select,
} from 'redux-saga/effects';
import io from 'socket.io-client';
import * as actions from '../actions';
import config from '../config';

function connect() {
  const socket = io(config.url);
  return new Promise((resolve) => {
    socket.on('connect', () => {
      console.log('success connect');
      resolve(socket);
    });
  });
}

function* loginUser() {
  while (true) {
    const { payload } = yield take(actions.LOGIN_USER);
    const socket = yield call(connect);
    yield put(actions.setSocket(socket));
    window.localStorage.setItem('username', payload);
  }
}

function* logoutUser() {
  while (true) {
    yield take(actions.LOGOUT_USER);
    yield put(actions.delteSocket());
    localStorage.clear();
  }
}

export default function* () {
  yield fork(loginUser);
  yield fork(logoutUser);
}
