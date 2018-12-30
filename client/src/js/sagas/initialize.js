import { put, fork, call, takeEvery } from 'redux-saga/effects';
import * as actions from '../actions';
import { getRoomList } from '../utils/api';

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
  const {
    data: { roomList },
  } = yield call(getRoomList);
  yield put(actions.setRoomList(roomList));
}

function* handleGetUeserName() {
  yield takeEvery(actions.INITIALIZE, runGetUserName);
}

function* handleGetRoomList() {
  yield takeEvery(actions.INITIALIZE, runGetRoomList);
}

export default function*() {
  yield fork(handleGetUeserName);
  yield fork(handleGetRoomList);
}
