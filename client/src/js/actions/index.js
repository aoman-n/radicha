import { createAction } from 'redux-actions';

// actions
export const INITIALIZE = 'INITIALIZE';
export const LOGIN_USER = 'LOGIN_USER';
export const LOGOUT_USER = 'LOGOUT_USER';
export const SENT_MESSAGE = 'SEND_MESSAGE';
export const RECEIVE_MESSAGE = 'RECEIVE_MESSAGE';
export const CREATE_CONNECTION = 'CREATE_CONNECTION';
export const SET_SOCKET = 'SET_SOCKET';
export const TOGLLE_ROOMBAR = 'TOGLLE_ROOMBAR';
export const SHOW_LOGIN_MODAL = 'SHOW_LOGIN_MODAL';
export const CLOSE_LOGIN_MODAL = 'CLOSE_LOGIN_MODAL';
export const JOIN_ROOM = 'JOIN_ROOM';

// actionCreators
export const initialize = createAction(INITIALIZE);
export const loginUser = createAction(LOGIN_USER);
export const logoutUser = createAction(LOGOUT_USER);
export const sendMessage = createAction(SENT_MESSAGE);
export const receiveMessage = createAction(RECEIVE_MESSAGE);
export const createConnection = createAction(CREATE_CONNECTION);
export const setSocket = createAction(SET_SOCKET);
export const toggleRoombar = createAction(TOGLLE_ROOMBAR);
export const showLoginModal = createAction(SHOW_LOGIN_MODAL);
export const closeLoginModal = createAction(CLOSE_LOGIN_MODAL);
export const joinRoom = createAction(JOIN_ROOM);
