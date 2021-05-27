// import ReduxTypes from '../types.redux';
import {DataStore} from 'aws-amplify';
import {Like} from '../../models';
import storage from '../../utils/storage';
import {getCurrentTime} from '../../utils/methods';
import {v4 as uuid} from 'uuid';

const userID = storage.readUserId();

export const performLike = async (id, isLike, isPost = true) => {
  try {
    if (isLike) {
      await performIsLike(id, isPost);
    } else {
      const result = await getInfo(id, isPost);
      await DataStore.delete(result[0]);
    }
  } catch (error) {
    console.log({msg: 'Error fetching clicked post', error});
  }
};

export const getLikeInfo = async (id, isPost = true) => {
  try {
    const result = await getInfo(id, isPost);
    const likes = await getAllLikes(id, isPost);

    return {isLike: result[0]?.isLiked || false, nLikes: likes.length, likes};
  } catch (error) {
    console.log({msg: 'Error fetching clicked post', error});
  }
};

const performIsLike = async (id, isPost = true) => {
  try {
    let result = null;

    if (isPost) {
      result = await DataStore.save(
        new Like({
          time: getCurrentTime(),
          post: {
            id,
          },
          comment: {
            id: uuid(),
          },
          user: {
            id: userID,
          },
          isLiked: true,
        }),
      );
    } else {
      result = await DataStore.save(
        new Like({
          time: getCurrentTime(),
          comment: {
            id,
          },
          post: {
            id: uuid(),
          },
          user: {
            id: userID,
          },
          isLiked: true,
        }),
      );
    }

    return result;
  } catch (error) {
    console.log(error, 'error liking');
  }
};

const getInfo = async (id, isPost = true) => {
  try {
    let data = null;

    if (isPost) {
      data = await (await DataStore.query(Like))
        .filter(c => c.user.id === userID)
        .filter(c => c.post.id === id);
    } else {
      data = await (await DataStore.query(Like))
        .filter(c => c.user.id === userID)
        .filter(c => c.comment.id === id);
    }
    return data;
  } catch (error) {
    console.log(error, 'error disliking');
  }
};

const getAllLikes = async (id, isPost = true) => {
  try {
    let data = [];

    if (isPost) {
      data = await (await DataStore.query(Like)).filter(
        c => c?.post?.id === id,
      );
    } else {
      data = await (await DataStore.query(Like)).filter(
        c => c?.comment?.id === id,
      );
    }
    return data;
  } catch (error) {
    console.log(error, 'error getting all');
  }
};
