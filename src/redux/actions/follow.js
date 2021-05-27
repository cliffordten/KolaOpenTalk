import ReduxTypes from '../types.redux';
import {DataStore} from 'aws-amplify';
import {Follower, Followering} from '../../models';
import storage from '../../utils/storage';

const userID = storage.readUserId();

export const saveUserFollowing = (userFollowing = []) => async dispatch => {
  try {
    const users = await Promise.all(
      userFollowing.map(async id => {
        createUserFollower(id);
        const result = await createUserFollowing(id);

        if (result) {
          return result;
        }
      }),
    );

    if (users.length > 0) {
      dispatch({
        type: ReduxTypes.follow.saveFollowing,
        payload: users,
      });
    }
  } catch (error) {
    dispatch({
      type: ReduxTypes.exception.error,
      payload: {msg: 'Error Saving userFollowing', error},
    });
  }
};

export const saveUserUnFollow = (unFollowingUsers = []) => async dispatch => {
  try {
    const result = await Promise.all(
      unFollowingUsers.map(async id => {
        deleteUserFollower(id);
        const data = await deleteUserFollowing(id);
        if (data) {
          return data;
        }
      }),
    );
    if (result.length > 0) {
      dispatch({
        type: ReduxTypes.follow.saveUnFollowing,
        payload: unFollowingUsers,
      });
    }
  } catch (error) {
    dispatch({
      type: ReduxTypes.exception.error,
      payload: {msg: 'Error Saving unFollowingUsers', error},
    });
  }
};

const createUserFollowing = async userFollowingID => {
  try {
    const userItems = await (
      await DataStore.query(Followering, c =>
        c.and(a => a.userID('eq', userID).isFollowing('eq', true)),
      )
    ).filter(c => c.followering.id === userFollowingID);

    let result = null;

    if (userItems.length === 0) {
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
    const userItems = await (
      await DataStore.query(Followering, c =>
        c.and(a => a.userID('eq', userID).isFollowing('eq', true)),
      )
    ).filter(c => c.followering.id === userFollowerID);

    let result = null;

    if (userItems.length === 0) {
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

const deleteUserFollowing = async id => {
  try {
    const userItems = await (
      await DataStore.query(Followering, c =>
        c.and(a => a.userID('eq', userID).isFollowing('eq', true)),
      )
    ).filter(c => c.followering.id === id);

    let result = null;

    if (userItems.length > 0) {
      await DataStore.delete(userItems[0]);
      result = 'passed';
    }

    return result;
  } catch (error) {
    console.log('deleteFollowering', error);
  }
};

const deleteUserFollower = async id => {
  try {
    const userItems = await (
      await DataStore.query(Follower, c =>
        c.and(a => a.userID('eq', id).isFollow('eq', true)),
      )
    ).filter(c => c.follower.id === userID);

    let result = null;

    if (userItems.length > 0) {
      await DataStore.delete(userItems[0]);
      result = 'passed';
    }

    return result;
  } catch (error) {
    console.log('deleteFollowering', error);
  }
};

export const checkFollow = async id => {
  const result = await (
    await DataStore.query(Followering, c => c.and(a => a.userID('eq', userID)))
  ).filter(c => c.followering.id === id);

  if (result.length >= 1) {
    return result[0]?.isFollowing;
  }
};
