import {
  take, put, fork, takeEvery, select, call,
} from 'redux-saga/effects';
import * as actions from '../actions';

function* getUserName() {
  const username = yield localStorage.getItem('username');
  if (username) {
    yield put(actions.loginUser(username));
  } else {
    console.log('not found username in localstorage');
    yield put(actions.showLoginModal());
  }
}

function* flow() {
  yield takeEvery(actions.INITIALIZE, getUserName);
}

export default function* () {
  yield fork(flow);
}
