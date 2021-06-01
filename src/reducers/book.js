export const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_BOOK:
      // some actions
    case REMOVE_BOOK:
      // some actions
    default:
      return state;
  }
};
