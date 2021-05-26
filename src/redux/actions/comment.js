import ReduxTypes from '../types.redux';
import {DataStore} from 'aws-amplify';
import {Comment} from '../../models';
import storage from '../../utils/storage';
import {uploadImage} from '../../utils/methods';
import {v4 as uuid} from 'uuid';

const userID = storage.readUserId();

export const getComments = (
  postId,
  parentCommentId = null,
  next = 0,
) => async dispatch => {
  try {
    dispatch({
      type: ReduxTypes.exception.loading,
      payload: true,
    });

    if (parentCommentId) {
      const comments = await DataStore.query(
        Comment,
        c =>
          c
            .and(a => a.childCommentId('ne', null))
            .parentComentId('eq', parentCommentId),
        {
          page: 0 + next,
          limit: 10,
        },
      );

      if (comments.length >= 0) {
        dispatch({
          type: ReduxTypes.comment.listChildComment,
          payload: comments,
        });
      }
    } else {
      const comments = await (
        await DataStore.query(Comment, c => c.childCommentId('eq', null), {
          page: 0 + next,
          limit: 10,
        })
      ).filter(c => c.post.id === postId);

      if (comments.length >= 0) {
        dispatch({
          type: ReduxTypes.comment.listComment,
          payload: comments,
        });
      }
    }
  } catch (error) {
    dispatch({
      type: ReduxTypes.exception.error,
      payload: {msg: 'Error fetching post', error},
    });
  }
};

export const getClickedComment = parentComentId => async dispatch => {
  try {
    const comment = await DataStore.query(Comment, c =>
      c.parentComentId('eq', parentComentId),
    );

    if (comment.length >= 0) {
      dispatch({
        type: ReduxTypes.comment.getComment,
        payload: comment[0],
      });
    }
  } catch (error) {
    dispatch({
      type: ReduxTypes.exception.error,
      payload: {msg: 'Error fetching post', error},
    });
  }
};

export const createComment = (
  content,
  path,
  blob,
  time,
  postID,
  parentComentId = null,
) => async dispatch => {
  try {
    const commentImage = blob
      ? await uploadImage(
          'commentImage/',
          path,
          blob?._data?.name,
          blob?._data?.type,
        )
      : null;

    if (parentComentId) {
      const result = await DataStore.save(
        new Comment({
          content,
          post: {
            id: postID,
          },
          commentImage,
          time,
          user: {
            id: userID,
          },
          childCommentId: uuid(),
          parentComentId,
        }),
      );

      if (result) {
        dispatch({
          type: ReduxTypes.comment.createChildComment,
          payload: [result],
        });
      }
    } else {
      const result = await DataStore.save(
        new Comment({
          content,
          post: {
            id: postID,
          },
          commentImage,
          time,
          user: {
            id: userID,
          },
          parentComentId: uuid(),
        }),
      );

      if (result) {
        dispatch({
          type: ReduxTypes.comment.createPostComment,
          payload: [result],
        });
      }
    }
  } catch (error) {
    dispatch({
      type: ReduxTypes.exception.error,
      payload: {msg: 'Error Saving post', error},
    });
  }
};

export const getNComments = async postId => {
  const comments = await (
    await DataStore.query(Comment, c => c.childCommentId('eq', null))
  ).filter(c => c.post.id === postId);

  return comments?.length;
};

export const getNChildComments = async parentCommentId => {
  const comments = await (
    await DataStore.query(Comment, c => c.childCommentId('ne', null))
  ).filter(c => c.parentComentId === parentCommentId);

  return comments?.length;
};
