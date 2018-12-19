import { createAction } from 'redux-actions';

// actions
export const SENT_MESSAGE = 'SEND_MESSAGE';
export const RECEIVE_MESSAGE = 'RECEIVE_MESSAGE';
export const CREATE_CONNECTION = 'CREATE_CONNECTION';
export const SET_SOCKET = 'SET_SOCKET';
export const TOGLLE_ROOMBAR = 'TOGLLE_ROOMBAR';

// actionCreators
export const sendMessage = createAction(SENT_MESSAGE);
export const receiveMessage = createAction(RECEIVE_MESSAGE);
export const createConnection = createAction(CREATE_CONNECTION);
export const setSocket = createAction(SET_SOCKET);
export const toggleRoombar = createAction(TOGLLE_ROOMBAR);
