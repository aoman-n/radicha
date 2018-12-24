const initialState = {
  roomname: null,
  users: [],
  messages: [],
  joined: false,
  pending: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'JOIN_ROOM':
      return {
        ...state,
        roomname: action.payload,
        joined: true,
        pending: true,
      };
    case 'LEAVE_ROOM':
      return {
        ...state,
        roomname: null,
        joined: false,
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
        pending: false,
      };
    case 'ADD_ROOM_USER':
      return {
        ...state,
        users: state.users.concat({ id: action.payload.id, name: action.payload.name }),
      };
    case 'REMOVE_ROOM_USER':
      return {
        ...state,
        users: state.users.filter(u => u.id !== action.payload),
      };
    case 'RESET_CHATROOM_STATE':
      return initialState;
    default:
      return state;
  }
};
