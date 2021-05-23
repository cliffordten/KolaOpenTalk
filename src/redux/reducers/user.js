import ReduxTypes from '../types.redux';
import _ from 'lodash';

const INITIAL_STATE = {
  currentUser: null,
  userList: [],
  userBlackList: [],
  error: false,
};

export const userReducer = (state = INITIAL_STATE, action) => {
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

    case ReduxTypes.user.setUserBlackList:
      return {
        ...state,
        userBlackList: _.unionBy(action.payload, state.userBlackList, 'id'),
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
