import ReduxTypes from '../types.redux';
import _ from 'lodash';

const INITIAL_STATE = {
  following: [],
  error: false,
};

export const followReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ReduxTypes.follow.saveFollowing:
      return {
        ...state,
        following: _.unionBy(action.payload, state.following, 'id'),
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
