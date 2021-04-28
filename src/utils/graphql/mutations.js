import {Auth, API, graphqlOperation} from 'aws-amplify';

import {createUser} from '../../graphql/mutations';
import {uploadImage} from '../methods';

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
    const result = await API.graphql(
      graphqlOperation(createUser, {
        input: {
          email,
          picture: location,
          username,
          name,
        },
      }),
    );

    console.log(result);
  } catch (error) {
    console.log('createuser', error);
  }
};
