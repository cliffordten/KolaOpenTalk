import ReduxTypes from '../types.redux';
import {DataStore, Predicates} from 'aws-amplify';
import {Post} from '../../models';
import storage from '../../utils/storage';
import {uploadImage} from '../../utils/methods';

const userID = storage.readUserId();

export const getPosts = (next = 0) => async dispatch => {
  try {
    const posts = await DataStore.query(Post, Predicates.ALL, {
      page: 0 + next,
      limit: 10,
    });

    if (posts.length >= 0) {
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

export const getClickedPost = postId => async dispatch => {
  try {
    const post = await DataStore.query(Post, postId);

    if (post) {
      dispatch({
        type: ReduxTypes.post.getPost,
        payload: post,
      });
    }
  } catch (error) {
    dispatch({
      type: ReduxTypes.exception.error,
      payload: {msg: 'Error fetching clicked post', error},
    });
  }
};

export const createPost = (
  desc,
  interest,
  blob,
  path,
  time,
  isPrivate = false,
) => async dispatch => {
  try {
    dispatch({
      type: ReduxTypes.exception.loading,
      payload: true,
    });

    const postImage = blob
      ? await uploadImage(
          'postImages/',
          path,
          blob?._data?.name,
          blob?._data?.type,
        )
      : null;

    const result = await DataStore.save(
      new Post({
        desc,
        interest,
        postImage,
        time,
        user: {id: userID},
        isPrivate,
      }),
    );

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
