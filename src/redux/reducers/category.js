import ReduxTypes from '../types.redux';
const USER_INITIAL_STATE = {
  categories: [],
  error: false,
};

export const categoryReducer = (state = USER_INITIAL_STATE, action) => {
  switch (action.type) {
    case ReduxTypes.category.listCategories:
      return {
        ...state,
        categories: [...state.categories, ...action.payload],
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
