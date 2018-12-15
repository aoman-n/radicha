const initialState = {
  socket: null,
  messages: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'CREATE_CONNECTION':
      return state;
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
      console.log('ok');
    default:
      return state;
  }
};
