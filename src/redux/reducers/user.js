import ReduxTypes from '../types.redux';
const USER_INITIAL_STATE = {
  currentUser: null,
  userList: [],
};

export const userReducer = (state = USER_INITIAL_STATE, action) => {
  switch (action.type) {
    case ReduxTypes.setCurrentUser:
      return {
        ...state,
        currentUser: action.payload,
      };

    case ReduxTypes.setUserList:
      return {
        ...state,
        userList: action.payload,
      };

    default:
      return state;
  }
};
