import { fork, take, call, put, select } from 'redux-saga/effects';
import { eventChannel } from 'redux-saga';
import io from 'socket.io-client';
import * as actions from '../actions';
import config from '../config';

function subscribe(socket) {
  return eventChannel(emit => {
    socket.on('add room', name => {
      emit(actions.addRoom(name));
    });
    socket.on('created room', name => {
      emit(actions.goCreatedRoom(name));
    });
    return () => {};
  });
}

function* goCreatedRoom(context) {
  while (true) {
    const { payload } = yield take(actions.GO_CREATED_ROOM);
    yield call(context.history.push, `/room/${payload}`);
  }
}

function* changeApp(socket) {
  if (socket) {
    const channel = yield call(subscribe, socket);
    while (true) {
      const action = yield take(channel);
      console.log('action:', action);
      yield put(action);
    }
  }
}

function connect() {
  const socket = io(config.url);
  return new Promise(resolve => {
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
    yield fork(changeApp, socket);
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

function* runCreateRoom() {
  while (true) {
    const { payload } = yield take(actions.CREATE_ROOM);
    const { socket } = yield select(state => state.app);
    socket.emit('create room', payload);
  }
}

export default function*(context) {
  yield fork(loginUser);
  yield fork(logoutUser);
  yield fork(runCreateRoom);
  yield fork(goCreatedRoom, context);
}
