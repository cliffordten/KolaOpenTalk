import ReduxTypes from '../types.redux';
import {DataStore, Predicates} from 'aws-amplify';
import {Category} from '../../models';

export const getCategories = (next = 0) => async dispatch => {
  try {
    const category = await DataStore.query(Category, Predicates.ALL, {
      page: 0 + next,
      limit: 12,
    });

    if (category) {
      dispatch({
        type: ReduxTypes.category.listCategories,
        payload: category,
      });
    }
  } catch (error) {
    dispatch({
      type: ReduxTypes.exception.error,
      payload: {msg: 'Error fetching categories', error},
    });
  }
};
