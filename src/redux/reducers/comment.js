import ReduxTypes from '../types.redux';
import _ from 'lodash';

const INITIAL_STATE = {
  comments: [],
  childComments: [],
  isNext: false,
  error: false,
  loading: false,
  cickedComment: null,
};

export const commentReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ReduxTypes.comment.listComment:
      return {
        ...state,
        comments: action.payload.reverse(),
        isNext: action.payload?.length >= 0,
        loading: false,
      };
    case ReduxTypes.comment.createPostComment:
      return {
        ...state,
        comments: _.unionBy(action.payload, state.comments, 'id'),
      };
    case ReduxTypes.comment.listChildComment:
      return {
        ...state,
        childComments: action.payload.reverse(),
        isNext: action.payload?.length >= 0,
        loading: false,
      };
    case ReduxTypes.comment.createChildComment:
      return {
        ...state,
        childComments: _.unionBy(action.payload, state.childComments, 'id'),
      };
    case ReduxTypes.comment.getComment:
      return {
        ...state,
        cickedComment: action.payload,
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
