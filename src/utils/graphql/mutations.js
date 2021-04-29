import {API, graphqlOperation} from 'aws-amplify';

import {
  createUser,
  createInterest,
  createFollowInfo,
  updateFollowInfo,
  createPost,
} from '../../graphql/mutations';
import {uploadImage} from '../methods';
import storage from '../storage';
import {getUserInfo} from './query';

const getUserId = () => {
  return storage.readUserId();
};

export const createUserAccount = async (
  email,
  picture,
  username,
  name,
  blob,
  path,
) => {
  try {
    const location = await uploadImage(
      'profile/',
      path,
      picture,
      blob._data.type,
    );

    const {
      data: {
        createUser: {id},
      },
    } = await API.graphql(
      graphqlOperation(createUser, {
        input: {
          email,
          picture: location,
          username,
          name,
        },
      }),
    );

    storage.setUserId(id);
  } catch (error) {
    console.log('createuser', error);
  }
};

export const createUserInterest = async (categoryID, name, profile) => {
  try {
    const result = await API.graphql(
      graphqlOperation(createInterest, {
        input: {categoryID, name, profile, userID: storage.readUserId()},
      }),
    );

    console.log(result ? 'Sucess' : false);
  } catch (error) {
    console.log('createUserInterest', error);
  }
};

export const createUserFollows = async (
  userFollowingID,
  isFollowing = true,
  isFollowed = false,
  userID = storage.readUserId(),
) => {
  try {
    const result = await API.graphql(
      graphqlOperation(createFollowInfo, {
        input: {
          isFollowed,
          isFollowing,
          userFollowingID,
          userID,
        },
      }),
    );

    console.log(result ? 'Sucess' : false);
  } catch (error) {
    console.log('createUserFollows', error);
  }
};

export const updateUserFollows = async (
  id,
  following = null,
  isFollowed = true,
) => {
  try {
    if (following) {
      await API.graphql(
        graphqlOperation(updateFollowInfo, {
          input: {
            id,
            following,
          },
        }),
      );
    } else {
      await API.graphql(
        graphqlOperation(updateFollowInfo, {
          input: {
            id,
            isFollowed,
          },
        }),
      );
    }

    console.log('Sucess');
  } catch (error) {
    console.log('updateFollowInfo', error);
  }
};

export const followUser = async id => {
  const {followInfo: userFollowInfo} = await getUserInfo(getUserId());
  let updated = 0;

  if (userFollowInfo) {
    const {items: userItems} = userFollowInfo;
    userItems.forEach(({id: _id, userFollowingID}) => {
      if (userFollowingID === id) {
        updateUserFollows(_id, true);
        updated = updated + 1;
      }
    });
    const {followInfo} = await getUserInfo(id);
    let check = 0;

    if (followInfo) {
      const {items} = followInfo;

      items.forEach(({id: _id, userFollowingID}) => {
        if (userFollowingID === getUserId()) {
          updateUserFollows(_id);
          check = check + 1;
        }
      });
    }
    if (check === 0) {
      createUserFollows(getUserId(), false, true, id);
    }
  }

  if (updated === 0) {
    createUserFollows(id);
    const {followInfo} = await getUserInfo(id);
    let check = 0;

    if (followInfo) {
      const {items} = followInfo;

      items.forEach(({id: _id, userFollowingID}) => {
        if (userFollowingID === getUserId()) {
          updateUserFollows(_id);
          check = check + 1;
        }
      });
    }
    if (check === 0) {
      createUserFollows(getUserId(), false, true, id);
    }
  }
};

export const unFollowUser = async id => {
  const {followInfo: userFollowInfo} = await getUserInfo(getUserId());

  if (userFollowInfo) {
    const {items: userItems} = userFollowInfo;
    userItems.forEach(({id: _id, userFollowingID}) => {
      if (userFollowingID === id) {
        updateUserFollows(_id, false);
      }
    });
    const {followInfo} = await getUserInfo(id);

    if (followInfo) {
      const {items} = followInfo;

      items.forEach(({id: _id, userFollowingID}) => {
        if (userFollowingID === getUserId()) {
          updateUserFollows(_id, null, false);
        }
      });
    }
  }
};

export const createUserPost = async (
  desc,
  interest,
  blob,
  path,
  time,
  userID = storage.readUserId(),
) => {
  try {
    const postImage = blob
      ? await uploadImage(
          'postImages/',
          path,
          blob?._data?.name,
          blob?._data?.type,
        )
      : null;

    const result = await API.graphql(
      graphqlOperation(createPost, {
        input: {
          desc,
          interest,
          postImage,
          time,
          userID,
        },
      }),
    );

    console.log(result ? 'Sucess' : false);
    return true;
  } catch (error) {
    console.log('createUserPost', error);
  }
};
