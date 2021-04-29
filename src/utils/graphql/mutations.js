import {API, graphqlOperation} from 'aws-amplify';

import {
  createUser,
  createInterest,
  createFollowInfo,
  updateFollowInfo,
} from '../../graphql/mutations';
import {uploadImage} from '../methods';
import storage from '../storage';

export const createUserAccount = async (
  email,
  picture,
  username,
  name,
  blob,
  path,
) => {
  try {
    const response = await uploadImage(
      'profile/',
      path,
      picture,
      blob._data.type,
    );

    const {
      status,
      body: {
        postResponse: {location},
      },
    } = response;

    if (status !== 201) {
      console.log('Failed to upload image to S3', response);
    }
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

export const updateUserFollows = async (id, isFollowed = true) => {
  try {
    const result = await API.graphql(
      graphqlOperation(updateFollowInfo, {
        input: {
          id,
          isFollowed,
        },
      }),
    );

    console.log(result ? 'Sucess' : false);
  } catch (error) {
    console.log('updateFollowInfo', error);
  }
};
