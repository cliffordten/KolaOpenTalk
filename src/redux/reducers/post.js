import ReduxTypes from '../types.redux';
import _ from 'lodash';

const INITIAL_STATE = {
  posts: [],
  user_post: [],
  isNext: true,
  error: false,
};

export const postReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ReduxTypes.post.listPost:
      return {
        ...state,
        posts: _.unionBy(action.payload, state.posts, 'id'),
        isNext: action.payload?.length > 0,
      };
    case ReduxTypes.post.createPost:
      return {
        ...state,
        posts: _.unionBy(action.payload, state.posts, 'id'),
        user_post: _.unionBy(action.payload, state.user_post, 'id'),
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
