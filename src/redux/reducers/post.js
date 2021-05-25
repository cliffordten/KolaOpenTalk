import ReduxTypes from '../types.redux';
import _ from 'lodash';

const INITIAL_STATE = {
  posts: [],
  user_post: [],
  cickedPost: null,
  isNext: false,
  error: false,
  loading: false,
};

export const postReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ReduxTypes.post.listPost:
      return {
        ...state,
        posts: _.unionBy(action.payload, state.posts, 'id').reverse(),
        isNext: action.payload?.length >= 0,
      };
    case ReduxTypes.post.createPost:
      return {
        ...state,
        posts: _.unionBy(action.payload, state.posts, 'id'),
        user_post: _.unionBy(action.payload, state.user_post, 'id'),
        loading: false,
      };
    case ReduxTypes.post.getPost:
      return {
        ...state,
        cickedPost: action.payload,
      };
    case ReduxTypes.exception.loading:
      return {
        ...state,
        loading: action.payload,
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
