import ReduxTypes from '../types.redux';
import _ from 'lodash';

const INITIAL_STATE = {
  categories: [],
  user_category: [],
  isNext: false,
  error: false,
};

export const categoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ReduxTypes.category.listCategories:
      return {
        ...state,
        categories: _.unionBy(action.payload, state.categories, 'id'),
        isNext: action.payload?.length >= 0,
      };
    case ReduxTypes.category.saveUserCategory:
      return {
        ...state,
        user_category: _.unionBy(action.payload, state.user_category, 'id'),
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
