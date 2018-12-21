import {
  take, put, fork, takeEvery, select, call,
} from 'redux-saga/effects';
import * as actions from '../actions';

function* getUserName() {
  const username = yield localStorage.getItem('username');
  yield put(actions.loginUser(username));
}

function* flow() {
  yield takeEvery(actions.INITIALIZE, getUserName);
}

export default function* () {
  yield fork(getUserName);
}
