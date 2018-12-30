const initialState = {
  roomList: [],
  modals: {
    isLoginModal: false,
    isCreateRoomModal: true,
  },
  isRoomBar: true,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SET_ROOM_LIST':
      return { ...state, roomList: action.payload };
    case 'TOGLLE_ROOMBAR':
      return { ...state, isRoomBar: !state.isRoomBar };
    case 'SHOW_LOGIN_MODAL':
      return {
        ...state,
        modals: { isLoginModal: true },
      };
    case 'CLOSE_LOGIN_MODAL':
      return {
        ...state,
        modals: { isLoginModal: false },
      };
    case 'SHOW_CREATE_ROOM_MODAL':
      return {
        ...state,
        modals: { isCreateRoomModal: true },
      };
    case 'CLOSE_CREATE_ROOM_MODAL':
      return {
        ...state,
        modals: { isCreateRoomModal: false },
      };
    default:
      return state;
  }
};
