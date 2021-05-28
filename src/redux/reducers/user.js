import ReduxTypes from '../types.redux';
import _ from 'lodash';

const INITIAL_STATE = {
  currentUser: null,
  userList: [],
  userBlackList: [],
  error: false,
  userError: false,
  success: false,
  userSearch: [],
  searching: false,
};

export const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ReduxTypes.user.setCurrentUser:
      return {
        ...state,
        currentUser: action.payload,
      };

    case ReduxTypes.user.searchUser:
      return {
        ...state,
        userSearch: _.filter(state.userList, ({name, username}) =>
          action.payload.length > 1
            ? name.toLowerCase().includes(action.payload.toLowerCase()) ||
              username.toLowerCase().includes(action.payload.toLowerCase())
            : state.userList,
        ),
      };

    case ReduxTypes.user.loginUser:
      return {
        ...state,
        currentUser: action.payload,
        userError: false,
        success: true,
      };

    case ReduxTypes.user.logoutUser:
      return {
        ...state,
        userError: false,
        success: false,
      };

    case ReduxTypes.follow.saveFollowing:
      return {
        ...state,
        currentUser: {
          ...state.currentUser,
          following: _.unionBy(
            action.payload,
            state.currentUser?.following,
            'id',
          ),
        },
      };

    case ReduxTypes.follow.saveUnFollowing:
      return {
        ...state,
        currentUser: {
          ...state.currentUser,
          following: _.filter(
            state.currentUser?.following,
            ({followering: {id}}) => !_.includes(action.payload, id),
          ),
        },
      };

    case ReduxTypes.user.setUserList:
      return {
        ...state,
        userList: action.payload,
      };

    case ReduxTypes.user.setLoginError:
      return {
        ...state,
        userError: true,
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

    case ReduxTypes.exception.searching:
      return {
        ...state,
        error: action.payload,
      };

    default:
      return state;
  }
};
