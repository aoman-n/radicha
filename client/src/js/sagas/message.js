import {
  take, put, fork, takeEvery, select, call, cancel,
} from 'redux-saga/effects';
import io from 'socket.io-client';
import { eventChannel } from 'redux-saga';
import * as actions from '../actions';
import config from '../config';

function subscribe(socket) {
  return eventChannel((emit) => {
    socket.on('chat message', (msg) => {
      console.log(msg);
      emit(actions.addMessage(msg));
    });
    socket.on('user join', (username) => {
      console.log(`joinしたuser: ${username}`);
      emit(actions.addMessage({ name: '', text: `${username}さん が入室しました` }));
      emit(actions.addRoomUser(username));
    });
    socket.on('initialize room data', (data) => {
      console.dir(data);
      emit(actions.initializeRoomData(data));
    });
    socket.on('leave user', (username) => {
      console.log(`leave userを受け取りました。username: ${username}`);
      emit(actions.removeRoomUser(username));
    });
    socket.on('clear socket', () => {
      console.log('clear socket を受け取りました。')
    });
    return () => {};
  });
}

function connect() {
  const socket = io(config.url);
  return new Promise((resolve) => {
    socket.on('connect', () => {
      console.log('success connect');
      resolve(socket);
    });
  });
}

function* read(socket) {
  if (socket) {
    const channel = yield call(subscribe, socket);
    while (true) {
      const action = yield take(channel);
      console.log('action:', action);
      yield put(action);
    }
  }
}

function* write(socket) {
  while (true) {
    const { payload } = yield take(actions.SENT_MESSAGE);
    const { userName } = yield select(state => state.message);
    const message = { name: userName, text: payload };
    yield put(actions.addMessage(message));
    socket.emit('chat message', message);
  }
}

function* handleIO(socket) {
  yield fork(read, socket);
  yield fork(write, socket);
}

function* connection() {
  while (true) {
    const { payload } = yield take(actions.CREATE_CONNECTION);
    const socket = yield call(connect);
    yield put(actions.setSocket(socket));
    const { userName, room } = yield select(state => state.message);
    socket.emit('join', { userName, room });
    const task = yield fork(handleIO, socket);
    // @TODO
    // ログアウト時の処理を待ち受けるようにする
    let action = yield take(actions.LOGOUT_USER);
    console.log('ルーム内でログアウトを確認');
    yield cancel(task);
    socket.emit('logout');
  }
}

export default function* () {
  yield fork(connection);
}
