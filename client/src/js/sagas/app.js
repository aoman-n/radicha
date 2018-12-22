import { fork, take } from 'redux-saga/effects';
import * as actions from '../actions';

function* logoutUser() {
  while (true) {
    yield take(actions.LOGOUT_USER);
    localStorage.clear();
  }
}

function* loginUser() {
  while (true) {
    const { payload } = yield take(actions.LOGIN_USER);
    window.localStorage.setItem('username', payload);
  }
}

export default function* () {
  yield fork(loginUser);
  yield fork(logoutUser);
}
