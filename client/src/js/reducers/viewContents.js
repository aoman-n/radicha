const initialState = {
  modals: {
    isLoginModal: false,
    isCreateRoomModal: true,
  },
  isRoomBar: true,
};

export default (state = initialState, action) => {
  switch (action.type) {
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
