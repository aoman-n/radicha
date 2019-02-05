import { put, fork, call, takeEvery } from 'redux-saga/effects';
import io from 'socket.io-client';
import * as actions from '../actions';
import { getRoomList } from '../utils/api';
import config from '../config';

function connect() {
  const socket = io(config.url);
  return new Promise(resolve => {
    socket.on('connect', () => {
      console.log('success connect');
      resolve(socket);
    });
  });
}

function* runGetUserName() {
  const username = yield localStorage.getItem('username');
  if (username) {
    yield put(actions.loginUser(username));
  } else {
    console.log('not found username in localstorage');
    yield put(actions.showLoginModal());
  }
}

function* runGetRoomList() {
  const { roomList, error } = yield call(getRoomList);
  if (roomList) {
    yield put(actions.setRoomList(roomList));
  } else {
    // @TODO エラーハンドリング
    console.log(error);
  }
}

function* runGetSocket() {
  const socket = yield call(connect);
  yield put(actions.setSocket(socket));
}

function* handleGetUeserName() {
  yield takeEvery(actions.INITIALIZE, runGetUserName);
}

function* handleGetRoomList() {
  yield takeEvery(actions.INITIALIZE, runGetRoomList);
}

function* handleGetSocket() {
  yield takeEvery(actions.INITIALIZE, runGetSocket);
}

export default function*() {
  yield fork(handleGetUeserName);
  yield fork(handleGetRoomList);
  yield fork(handleGetSocket);
}
