import { mockUsers } from '../components/presentators/mock';

const initialState = {
  userName: null,
  room: '',
  socket: null,
  users: mockUsers,
  messages: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN_USER':
      return {
        ...state,
        userName: action.payload,
      };
    case 'LOGOUT_USER':
      return {
        ...state,
        userName: null,
      };
    case 'JOIN_ROOM':
      return {
        ...state,
        joined: true,
      };
    case 'CREATE_CONNECTION':
      return {
        ...state,
        room: action.payload,
      };
    case 'SET_SOCKET':
      return {
        ...state,
        socket: action.payload,
      };
    case 'RECEIVE_MESSAGE':
      return {
        ...state,
        messages: state.messages.concat(action.payload),
      };
    case 'SEND_MESSAGE':
    default:
      return state;
  }
};
