import ReduxTypes from '../types.redux';
import {DataStore, Predicates} from 'aws-amplify';
import {Post} from '../../models';
// import storage from '../../utils/storage';

// const userID = storage.readUserId();

export const getPosts = (next = 0) => async dispatch => {
  try {
    const posts = await DataStore.query(Post, Predicates.ALL, {
      page: 0 + next,
      limit: 6,
    });

    if (posts) {
      dispatch({
        type: ReduxTypes.post.listPost,
        payload: posts,
      });
    }
  } catch (error) {
    dispatch({
      type: ReduxTypes.exception.error,
      payload: {msg: 'Error fetching post', error},
    });
  }
};

export const createPost = post => async dispatch => {
  try {
    const result = await DataStore.save(new Post(post));

    if (result) {
      dispatch({
        type: ReduxTypes.post.createPost,
        payload: [result],
      });
    }
  } catch (error) {
    dispatch({
      type: ReduxTypes.exception.error,
      payload: {msg: 'Error Saving post', error},
    });
  }
};
