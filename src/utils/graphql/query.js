import {API, graphqlOperation} from 'aws-amplify';

import {
  listCategorys,
  listUsers,
  getUser,
  listPosts,
  listParentComments,
} from '../../graphql/queries';
import storage from '../storage';

export const listCategories = async (nextToken = null, noLimit = false) => {
  try {
    if (noLimit) {
      const {
        data: {listCategorys: list},
      } = await API.graphql(graphqlOperation(listCategorys));
      return {...list};
    }

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

export const getCurrentUser = async email => {
  try {
    const {
      data: {
        listUsers: {items},
      },
    } = await API.graphql(
      graphqlOperation(listUsers, {filter: {email: {eq: email}}}),
    );
    return items[0];
  } catch ({code, message}) {
    console.log('listCategory', code, message);
  }
};

export const getUserInfo = async (id = storage.readUserId()) => {
  try {
    const {
      data: {getUser: list},
    } = await API.graphql(graphqlOperation(getUser, {id}));
    return {...list};
  } catch ({code, message}) {
    console.log('listCategory', code, message);
  }
};

export const getUserInfoFollower = async () => {
  const {
    followInfo: {items},
    ...rest
  } = await getUserInfo();

  const followers = items.filter(({isFollowed}) => isFollowed === true);
  const following = items.filter(({isFollowing}) => isFollowing === true);

  return {followers, following, ...rest};
};

export const getUserInterest = async () => {
  const {
    interest: {items},
    ...rest
  } = await getUserInfo();

  return {items, ...rest};
};

export const listAllPosts = async (nextToken = null, noLimit = false) => {
  try {
    if (noLimit) {
      const {
        data: {listPosts: list},
      } = await API.graphql(graphqlOperation(listPosts));
      return {...list};
    }

    if (nextToken) {
      const {
        data: {listPosts: list},
      } = await API.graphql(
        graphqlOperation(listPosts, {
          limit: 6,
          nextToken,
        }),
      );
      return {...list};
    }
    const {
      data: {listPosts: list},
    } = await API.graphql(
      graphqlOperation(listPosts, {
        limit: 6,
      }),
    );
    return {...list};
  } catch ({code, message}) {
    console.log('listPosts', code, message);
  }
};

export const listComments = async (id, nextToken = null, noLimit = false) => {
  try {
    if (noLimit) {
      const {
        data: {listParentComments: list},
      } = await API.graphql(
        graphqlOperation(listParentComments, {filter: {postID: {eq: id}}}),
      );
      return {...list};
    }

    if (nextToken) {
      const {
        data: {listParentComments: list},
      } = await API.graphql(
        graphqlOperation(listParentComments, {
          filter: {postID: {eq: id}},
          limit: 6,
          nextToken,
        }),
      );
      return {...list};
    }
    const {
      data: {listParentComments: list},
    } = await API.graphql(
      graphqlOperation(listParentComments, {
        limit: 6,
        filter: {postID: {eq: id}},
      }),
    );
    return {...list};
  } catch ({code, message}) {
    console.log('listParentComments', code, message);
  }
};
