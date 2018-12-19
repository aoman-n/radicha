const initialState = {
  isRoomBar: true,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'TOGLLE_ROOMBAR':
      return { ...state, isRoomBar: !state.isRoomBar };
    default:
      return state;
  }
};
