const initialState = {
  modals: {
    isLoginModal: false,
    isCreateRoomModal: false,
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
    default:
      return state;
  }
};
