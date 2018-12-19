// message
export const SENT_MESSAGE = 'SEND_MESSAGE';
export const RECEIVE_MESSAGE = 'RECEIVE_MESSAGE';
export const CREATE_CONNECTION = 'CREATE_CONNECTION';
export const SET_SOCKET = 'SET_SOCKET';
// viewContens
export const TOGLLE_ROOMBAR = 'TOGLLE_ROOMBAR';

export const sendMessage = text => ({
  type: SENT_MESSAGE,
  payload: text,
});

export const receiveMessage = text => ({
  type: RECEIVE_MESSAGE,
  payload: text,
});

export const createConnection = () => ({
  type: CREATE_CONNECTION,
});

export const setSocket = socket => ({
  type: SET_SOCKET,
  payload: socket,
});

export const toggleRoombar = () => ({
  type: TOGLLE_ROOMBAR,
});
