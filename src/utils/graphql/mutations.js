import {API, graphqlOperation} from 'aws-amplify';
import {v4 as uuid} from 'uuid';

import {
  createUser,
  createInterest,
  createPost,
  createUserBlackList,
  createFollowering,
  createFollower,
  deleteFollowering,
  deleteFollower,
  createComment,
} from '../../graphql/mutations';
import {uploadImage} from '../methods';
import storage from '../storage';
import {getUserInfo} from './query';

const userId = storage.readUserId();

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
      data: {createUser: user},
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

    storage.setUserId(user.id);

    return user;
  } catch (error) {
    console.log('createuser', error);
  }
};

export const createUserInterest = async (categoryID, name, profile) => {
  try {
    const result = await API.graphql(
      graphqlOperation(createInterest, {
        input: {categoryID, name, profile, userID: userId},
      }),
    );

    console.log(result ? 'Sucess' : false);
    return result;
  } catch (error) {
    console.log('createUserInterest', error);
  }
};

export const createUserFollowing = async (userFollowingID, userID = userId) => {
  try {
    const {
      following: {items: userItems},
    } = await getUserInfo(userId);
    let result = null;

    if (userItems.length > 0) {
      const isFollowing = userItems.filter(
        ({userFollowingID: id}) => userFollowingID === id,
      );

      if (isFollowing.length === 0) {
        result = await API.graphql(
          graphqlOperation(createFollowering, {
            input: {isFollowing: true, userFollowingID, userID},
          }),
        );
      }
    } else {
      result = await API.graphql(
        graphqlOperation(createFollowering, {
          input: {isFollowing: true, userFollowingID, userID},
        }),
      );
    }

    console.log(result ? 'Sucess' : false);
    return result;
  } catch (error) {
    console.log('createUserFollowing', error);
  }
};

export const createUserFollower = async (userFollowerID, userID = userId) => {
  try {
    let result = null;

    const {
      followers: {items: followerItems},
    } = await getUserInfo(userId);

    if (followerItems.length > 0) {
      const isfollowers = followerItems.filter(
        ({userFollowerID: id}) => userFollowerID === id,
      );

      if (isfollowers.length === 0) {
        result = await API.graphql(
          graphqlOperation(createFollower, {
            input: {
              isFollow: true,
              userID: userFollowerID,
              userFollowerID: userID,
            },
          }),
        );
      }
    } else {
      result = await API.graphql(
        graphqlOperation(createFollower, {
          input: {
            isFollow: true,
            userID: userFollowerID,
            userFollowerID: userID,
          },
        }),
      );
    }

    console.log(result ? 'Sucess' : false);
    return result;
  } catch (error) {
    console.log('createUserFollower', error);
  }
};

export const deleteUserFollowing = async id => {
  try {
    const {
      following: {items: userItems},
    } = await getUserInfo(userId);
    let result = null;

    if (userItems.length > 0) {
      const isFollowing = userItems.filter(
        ({userFollowingID}) => userFollowingID === id,
      );

      console.log(isFollowing);
      if (isFollowing.length > 0) {
        result = await API.graphql(
          graphqlOperation(deleteFollowering, {
            input: {
              id: isFollowing[0].id,
            },
          }),
        );
      }
    }

    console.log(result ? 'Sucess' : false);
  } catch (error) {
    console.log('deleteFollowering', error);
  }
};

export const deleteUserFollower = async id => {
  try {
    let result = null;

    const {
      followers: {items: followerItems},
    } = await getUserInfo(userId);

    if (followerItems.length > 0) {
      const isfollowers = followerItems.filter(
        ({userFollowerID}) => userFollowerID === id,
      );

      console.log(isfollowers);
      if (isfollowers.length > 0) {
        result = await API.graphql(
          graphqlOperation(deleteFollower, {
            input: {
              id: isfollowers[0].id,
            },
          }),
        );
      }
    }

    console.log(result ? 'Sucess' : false);
  } catch (error) {
    console.log('deleteFollowering', error);
  }
};

export const followUser = async followUserId => {
  await createUserFollowing(followUserId);
  await createUserFollower(followUserId);
};

export const unFollowUser = async unFollowUserId => {
  await deleteUserFollowing(unFollowUserId);
  await deleteUserFollower(unFollowUserId);
};

export const blackListUser = async (blackListUserID, userID = userId) => {
  try {
    const result = await API.graphql(
      graphqlOperation(createUserBlackList, {
        input: {
          blackListUserID,
          userID,
        },
      }),
    );

    console.log(result ? 'Sucess' : false);
    return result;
  } catch (error) {
    console.log('blackListUser', error);
  }
};

export const createUserPost = async (
  desc,
  interest,
  blob,
  path,
  time,
  isPrivate = false,
  userID = userId,
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
          isPrivate,
        },
      }),
    );

    console.log(result ? 'Sucess' : false);
    return result;
  } catch (error) {
    console.log('createUserPost', error);
  }
};

export const likePost = async (id, isliked) => {};

export const createUComment = async (
  content,
  path,
  blob,
  time,
  postID,
  parentComentId = null,
  userID = userId,
) => {
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
      const {
        data: {createComment: list},
      } = await API.graphql(
        graphqlOperation(createComment, {
          input: {
            content,
            postID,
            commentImage,
            time,
            userID,
            childCommentId: uuid(),
            parentComentId,
          },
        }),
      );
      console.log(list ? 'Sucess' : false);
      return list;
    }
    const {
      data: {createComment: list},
    } = await API.graphql(
      graphqlOperation(createComment, {
        input: {
          content,
          postID,
          commentImage,
          time,
          userID,
          parentComentId: uuid(),
        },
      }),
    );

    console.log(list ? 'Sucess' : false);
    return list;
  } catch (error) {
    console.log('createUserPost', error);
  }
};
