const initialState = {
  isFetching: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'START_FETCH':
     return {
       ...state,
       isFetching: true
     }
    default:
      return state;
  }
}