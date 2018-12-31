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
  const { roomList, error } = yield call(getRoomList);
  if (roomList) {
    yield put(actions.setRoomList(roomList));
  } else {
    // @TODO エラーハンドリング
    console.log(error);
  }
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
