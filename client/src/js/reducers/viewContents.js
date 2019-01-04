const initialState = {
  roomList: [],
  modals: {
    isLoginModal: false,
    isCreateRoomModal: false,
    isEjectFromRoomModal: false,
  },
  isRoomBar: true,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SET_ROOM_LIST':
      return {
        ...state,
        roomList: action.payload,
      };
    case 'ADD_ROOM':
      return {
        ...state,
        roomList: state.roomList.concat(action.payload),
      };
    case 'DELETE_ROOM_FROM_LIST':
      return {
        ...state,
        roomList: state.roomList.filter(room => room !== action.payload),
      };
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
    case 'SHOW_EJECT_FROM_ROOM_MODAL':
      return {
        ...state,
        modals: { isEjectFromRoomModal: true },
      };
    case 'CLOSE_EJECT_FROM_ROOM_MODAL':
      return {
        ...state,
        modals: { isEjectFromRoomModal: false },
      };
    default:
      return state;
  }
};
