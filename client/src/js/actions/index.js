import { createAction } from 'redux-actions';

// actions
/* initialize */
export const INITIALIZE = 'INITIALIZE';
/* app */
export const LOGIN_USER = 'LOGIN_USER';
export const LOGOUT_USER = 'LOGOUT_USER';
export const CREATE_CONNECTION = 'CREATE_CONNECTION';
export const SET_SOCKET = 'SET_SOCKET';
export const DELETE_SOCKET = 'DELETE_SOCKET';
export const CREATE_ROOM = 'CREATE_ROOM';
export const GO_CREATED_ROOM = 'GO_CREATED_ROOM';
/* chatRoom */
export const JOIN_ROOM = 'JOIN_ROOM';
export const INITIALIZE_ROOM_DATA = 'INITIALIZE_ROOM_DATA';
export const SENT_MESSAGE = 'SEND_MESSAGE';
export const ADD_MESSAGE = 'ADD_MESSAGE';
export const ADD_ROOM_USER = 'ADD_ROOM_USER';
export const REMOVE_ROOM_USER = 'REMOVE_ROOM_USER';
/* viewContents */
export const GET_ROOM_LIST = 'GET_ROOM_LIST';
export const SET_ROOM_LIST = 'SET_ROOM_LIST';
export const TOGLLE_ROOMBAR = 'TOGLLE_ROOMBAR';
export const SHOW_LOGIN_MODAL = 'SHOW_LOGIN_MODAL';
export const CLOSE_LOGIN_MODAL = 'CLOSE_LOGIN_MODAL';
export const SHOW_CREATE_ROOM_MODAL = 'SHOW_CREATE_ROOM_MODAL';
export const CLOSE_CREATE_ROOM_MODAL = 'CLOSE_CREATE_ROOM_MODAL';
export const ADD_ROOM = 'ADD_ROOM';

// actions creators
/* initialize */
export const initialize = createAction(INITIALIZE);
/* app */
export const loginUser = createAction(LOGIN_USER);
export const logoutUser = createAction(LOGOUT_USER);
export const createConnection = createAction(CREATE_CONNECTION);
export const setSocket = createAction(SET_SOCKET);
export const delteSocket = createAction(DELETE_SOCKET);
export const createRoom = createAction(CREATE_ROOM);
export const goCreatedRoom = createAction(GO_CREATED_ROOM);
/* chatRoom */
export const joinRoom = createAction(JOIN_ROOM);
export const initializeRoomData = createAction(INITIALIZE_ROOM_DATA);
export const sendMessage = createAction(SENT_MESSAGE);
export const addMessage = createAction(ADD_MESSAGE);
export const addRoomUser = createAction(ADD_ROOM_USER);
export const removeRoomUser = createAction(REMOVE_ROOM_USER);
/* viewContents */
export const getRoomList = createAction(GET_ROOM_LIST);
export const setRoomList = createAction(SET_ROOM_LIST);
export const toggleRoombar = createAction(TOGLLE_ROOMBAR);
export const showLoginModal = createAction(SHOW_LOGIN_MODAL);
export const closeLoginModal = createAction(CLOSE_LOGIN_MODAL);
export const showCreateRoomModal = createAction(SHOW_CREATE_ROOM_MODAL);
export const closeCreateRoomModal = createAction(CLOSE_CREATE_ROOM_MODAL);
export const addRoom = createAction(ADD_ROOM);
