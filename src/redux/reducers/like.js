import ReduxTypes from '../types.redux';
import _ from 'lodash';

const INITIAL_STATE = {
  likes: [
    {
      isLike: false,
      nLikes: 0,
    },
  ],
  loading: false,
  error: false,
};

export const likeReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ReduxTypes.like.getIsLikeInfo:
      return {
        ...state,
        likes: _.unionBy(action.payload, state.likes, 'id'),
      };
    case ReduxTypes.like.createLike:
      const item = _.find(state.likes, ['id', action.payload]);
      const nLike = item.nLikes;
      item.isLike = true;
      item.nLikes = nLike + 1;
      return {
        ...state,
        likes: _.unionBy([item], state.likes, 'id'),
      };
    case ReduxTypes.like.deleteLike:
      return {
        ...state,
        likes: {
          isLike: false,
          nLikes: state.isLikeInfo.likes.length - 1,
          likes: _.remove(state.isLikeInfo.likes, a => a.id !== action.payload),
        },
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
