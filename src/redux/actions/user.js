import {Follower, Followering, User, UserBlackList} from '../../models';
import ReduxTypes from '../types.redux';
import {DataStore} from 'aws-amplify';
import storage from '../../utils/storage';
import {uploadImage} from '../../utils/methods';

const userID = storage.readUserId();

export const setCurrentUser = user => ({
  type: ReduxTypes.user.setCurrentUser,
  payload: user,
});

const getUserFollowInfo = async (id = userID) => {
  const followingList = await DataStore.query(Followering);
  const followerList = await DataStore.query(Follower);

  const following = followingList?.filter(({userID: Id}) => id === Id);
  const followers = followerList?.filter(({userID: Id}) => id === Id);

  return {
    following,
    followers,
  };
};

export const signUpUser = (
  email,
  picture,
  username,
  name,
  blob,
  path,
) => async dispatch => {
  try {
    const location = await uploadImage(
      'profile/',
      path,
      picture,
      blob._data.type,
    );

    const user = await DataStore.save(
      new User({
        email,
        picture: location,
        username,
        name,
      }),
    );

    if (user) {
      const {id} = user;
      storage.setUserId(id);

      const followInfo = await getUserFollowInfo(id);

      dispatch({
        type: ReduxTypes.user.setCurrentUser,
        payload: {
          ...user[0],
          ...followInfo,
        },
      });
    }
  } catch (error) {
    dispatch({
      type: ReduxTypes.exception.error,
      payload: {msg: 'Error signing up User', error},
    });
  }
};

export const getUserInfo = (userEmail = null) => async dispatch => {
  try {
    let user = null;

    if (userEmail) {
      const userList = await DataStore.query(User);

      user = userList?.filter(({email}) => email === userEmail);
      if (user?.length === 1) {
        user = user[0];
      }
    } else {
      user = await DataStore.query(User, userID);
    }

    if (user) {
      const {id} = user;

      const followInfo = await getUserFollowInfo(id);

      storage.setUserId(id);
      storage.setUserisLogedOut(false);
      storage.setUserSignedup(false);

      dispatch({
        type: ReduxTypes.user.setCurrentUser,
        payload: {
          ...user,
          ...followInfo,
        },
      });
    }
  } catch (error) {
    dispatch({
      type: ReduxTypes.exception.error,
      payload: {msg: 'Error Loging in User', error},
    });
  }
};

export const setUserList = () => async dispatch => {
  try {
    const blackLists = await DataStore.query(UserBlackList);
    const userList = await DataStore.query(User);

    const filterCurrentUser = userList?.filter(({id}) => userID !== id);

    const filterBlacklist = filterCurrentUser.filter(({id}) =>
      blackLists.every(({blackList}) => blackList.id !== id),
    );

    if (filterBlacklist) {
      dispatch({
        type: ReduxTypes.user.setUserList,
        payload: filterBlacklist,
      });
    }
  } catch (error) {
    dispatch({
      type: ReduxTypes.exception.error,
      payload: {msg: 'Error BlackList User', error},
    });
  }
};

export const blackListUser = (
  blackListUserID,
  userList = [],
) => async dispatch => {
  try {
    const result = await DataStore.save(
      new UserBlackList({
        blackList: {
          id: blackListUserID,
        },
        userID,
      }),
    );
    const filterBlacklist = userList.filter(
      ({id}) => result.blackList.id !== id,
    );

    if (result) {
      dispatch({
        type: ReduxTypes.user.setUserList,
        payload: filterBlacklist,
      });
      dispatch({
        type: ReduxTypes.user.setUserBlackList,
        payload: result,
      });
    }
  } catch (error) {
    dispatch({
      type: ReduxTypes.exception.error,
      payload: {msg: 'Error BlackList User', error},
    });
  }
};
