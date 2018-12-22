const initialState = {
  userName: null,
  room: '',
  socket: null,
  users: [],
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
    case 'ADD_MESSAGE':
      return {
        ...state,
        messages: state.messages.concat(action.payload),
      };
    case 'INITIALIZE_ROOM_DATA':
      return {
        ...state,
        users: action.payload.users,
        messages: action.payload.messages,
      };
    case 'ADD_ROOM_USER':
      return {
        ...state,
        users: state.users.concat(action.payload),
      };
    default:
      return state;
  }
};
