import ReduxTypes from '../types.redux';
import {DataStore, Predicates} from 'aws-amplify';
import {Category, Interest} from '../../models';
import storage from '../../utils/storage';

const userID = storage.readUserId();

export const getCategories = (next = 0, all = null) => async dispatch => {
  try {
    let category = null;

    if (all) {
      category = category = await DataStore.query(Category);
    } else {
      category = await DataStore.query(Category, Predicates.ALL, {
        page: 0 + next,
        limit: 12,
      });
    }

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

export const saveUserCategories = (categories = []) => async dispatch => {
  try {
    categories.forEach(async ({...arg}) => {
      await DataStore.save(
        new Interest({
          ...arg,
          userID,
        }),
      );
    });

    if (categories) {
      dispatch({
        type: ReduxTypes.category.saveUserCategory,
        payload: categories,
      });
    }
  } catch (error) {
    dispatch({
      type: ReduxTypes.exception.error,
      payload: {msg: 'Error Saving categories', error},
    });
  }
};

export const checkSave = async () => {
  try {
    const result = await DataStore.query(Interest, c => c.userID('eq', userID));
    console.log(result);
  } catch (e) {
    console.log('object', e);
  }
};
