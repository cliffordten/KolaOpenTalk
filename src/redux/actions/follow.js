import ReduxTypes from '../types.redux';
import {DataStore} from 'aws-amplify';
import {Follower, Followering, User} from '../../models';
import storage from '../../utils/storage';

const userID = storage.readUserId();

export const saveUserFollowing = (userFollowing = []) => async dispatch => {
  try {
    userFollowing.forEach(async id => {
      createUserFollower(id);
      createUserFollowing(id);
    });

    if (userFollowing) {
      dispatch({
        type: ReduxTypes.category.saveUserCategory,
        payload: userFollowing,
      });
    }
  } catch (error) {
    dispatch({
      type: ReduxTypes.exception.error,
      payload: {msg: 'Error Saving userFollowing', error},
    });
  }
};

const createUserFollowing = async userFollowingID => {
  try {
    const userItems = await DataStore.query(User, userID);
    let result = null;

    console.log(userItems);

    if (userItems?.following?.length >= 0) {
      const isFollowing = userItems.filter(
        ({userFollowingID: id}) => userFollowingID === id,
      );

      if (isFollowing.length === 0) {
        result = await DataStore.save(
          new Followering({
            isFollowing: true,
            followering: {
              id: userFollowingID,
            },
            userID,
          }),
        );
      }
    } else {
      result = await DataStore.save(
        new Followering({
          isFollowing: true,
          followering: {
            id: userFollowingID,
          },
          userID,
        }),
      );
    }

    return result;
  } catch (error) {
    console.log('createUserFollowing', error);
  }
};

const createUserFollower = async userFollowerID => {
  try {
    const userItems = await DataStore.query(User, userID);
    let result = null;

    if (userItems?.followers?.length >= 0) {
      const isfollowers = userItems.filter(
        ({userFollowerID: id}) => userFollowerID === id,
      );

      if (isfollowers.length === 0) {
        result = await DataStore.save(
          new Follower({
            isFollow: true,
            userID: userFollowerID,
            follower: {
              id: userID,
            },
          }),
        );
      }
    } else {
      result = await DataStore.save(
        new Follower({
          isFollow: true,
          userID: userFollowerID,
          follower: {
            id: userID,
          },
        }),
      );
    }
    return result;
  } catch (error) {
    console.log('createUserFollower', error);
  }
};

export const checkFollow = async id => {
  const result = await (
    await DataStore.query(Followering, c => c.and(a => a.userID('eq', userID)))
  ).filter(c => c.followering.id === id);

  if (result.length === 1) {
    return result[0]?.isFollowing;
  }
  return false;
};
