import ReduxTypes from '../types.redux';
const USER_INITIAL_STATE = {
  currentUser: null,
  userList: [],
  error: false,
};

export const userReducer = (state = USER_INITIAL_STATE, action) => {
  switch (action.type) {
    case ReduxTypes.user.setCurrentUser:
      return {
        ...state,
        currentUser: action.payload,
      };

    case ReduxTypes.user.setUserList:
      return {
        ...state,
        userList: action.payload,
      };
    case ReduxTypes.exception.error:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
