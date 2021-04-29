import {API, graphqlOperation} from 'aws-amplify';

import {listCategorys, listUsers} from '../../graphql/queries';

export const listCategories = async (nextToken = null) => {
  try {
    if (nextToken) {
      const {
        data: {listCategorys: list},
      } = await API.graphql(
        graphqlOperation(listCategorys, {
          limit: 12,
          nextToken,
        }),
      );
      return {...list};
    }
    const {
      data: {listCategorys: list},
    } = await API.graphql(
      graphqlOperation(listCategorys, {
        limit: 12,
      }),
    );
    return {...list};
  } catch ({code, message}) {
    console.log('listCategory', code, message);
  }
};

export const listUserFollow = async () => {
  try {
    const {
      data: {listUsers: list},
    } = await API.graphql(graphqlOperation(listUsers));
    return {...list};
  } catch ({code, message}) {
    console.log('listCategory', code, message);
  }
};
