import { fork, take, call, put, select } from 'redux-saga/effects';
import * as actions from '../actions';

function* goCreatedRoom(context) {
  while (true) {
    const { payload } = yield take(actions.GO_CREATED_ROOM);
    yield call(context.history.push, `/room/${payload}`);
  }
}

function* loginUser() {
  while (true) {
    const { payload } = yield take(actions.LOGIN_USER);
    const { socket } = yield select(state => state.app);
    if (socket) {
      socket.emit('login', payload);
      window.localStorage.setItem('username', payload);
    }
  }
}

function* logoutUser() {
  while (true) {
    yield take(actions.LOGOUT_USER);
    const { socket } = yield select(state => state.app);
    socket.emit('logout');
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
