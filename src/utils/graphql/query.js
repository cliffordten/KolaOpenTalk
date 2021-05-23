import {API, graphqlOperation} from 'aws-amplify';

import {
  listCategorys,
  listUsers,
  getUser,
  listPosts,
  listUserBlackLists,
  listFollowerings,
  listFollowers,
  listComments,
  getPost,
  getComment,
} from '../../graphql/queries';
import storage from '../storage';

const userId = storage.readUserId();

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

    // console.log(list);
    return {...list};
  } catch (err) {
    console.log('listCategory', err);
  }
};

export const getBlacklistedUser = async (id = userId) => {
  try {
    const {
      data: {listUserBlackLists: list},
    } = await API.graphql(
      graphqlOperation(listUserBlackLists, {filter: {userID: {eq: id}}}),
    );
    return {...list};
  } catch ({code, message}) {
    console.log('getUserInfo', code, message);
  }
};

export const listUserFollow = async () => {
  try {
    const {
      data: {
        listUsers: {items},
      },
    } = await API.graphql(graphqlOperation(listUsers));
    const {items: blackList} = await getBlacklistedUser();
    const filterCurrentUser = items?.filter(({id}) => userId !== id);

    const filterBlacklist = filterCurrentUser.filter(({id}) =>
      blackList.every(({blackListUserID}) => blackListUserID !== id),
    );
    return {items: filterBlacklist};
  } catch ({code, message}) {
    console.log('listUserFollow', code, message);
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
    console.log('getCurrentUser', code, message);
  }
};

export const getUserInfo = async (id = userId) => {
  try {
    const {
      data: {getUser: list},
    } = await API.graphql(graphqlOperation(getUser, {id}));
    return {...list};
  } catch ({code, message}) {
    console.log('getUserInfo', code, message);
  }
};

export const getUserInterest = async () => {
  const {
    interest: {items},
    ...rest
  } = await getUserInfo();

  return {items, ...rest};
};

export const listAllPosts = async (next = null, noLimit = false) => {
  try {
    if (noLimit) {
      const {
        data: {listPosts: list},
      } = await API.graphql(graphqlOperation(listPosts));
      return {...list};
    }

    if (next) {
      const {
        data: {listPosts: list},
      } = await API.graphql(
        graphqlOperation(listPosts, {
          limit: 6,
          nextToken: next,
        }),
      );

      return {...list};
    } else {
      const {
        data: {listPosts: list},
      } = await API.graphql(
        graphqlOperation(listPosts, {
          limit: 6,
        }),
      );
      return {...list};
    }
  } catch (e) {
    console.log('listPosts', e);
  }
};

export const listPostComments = async (
  id,
  nextToken = null,
  noLimit = false,
) => {
  try {
    if (noLimit) {
      const {
        data: {listComments: list},
      } = await API.graphql(
        graphqlOperation(listComments, {
          filter: {postID: {eq: id}, childCommentId: {attributeExists: false}},
        }),
      );
      return {...list};
    }

    if (nextToken) {
      const {
        data: {listComments: list},
      } = await API.graphql(
        graphqlOperation(listComments, {
          filter: {postID: {eq: id}, childCommentId: {attributeExists: false}},
          limit: 6,
          nextToken,
        }),
      );
      return {...list};
    }
    const {
      data: {listComments: list},
    } = await API.graphql(
      graphqlOperation(listComments, {
        limit: 6,
        filter: {postID: {eq: id}, childCommentId: {attributeExists: false}},
      }),
    );
    return {...list};
  } catch ({code, message}) {
    console.log('listComments', code, message);
  }
};

export const listChildComments = async (
  id,
  nextToken = null,
  noLimit = false,
) => {
  try {
    if (noLimit) {
      const {
        data: {listComments: list},
      } = await API.graphql(
        graphqlOperation(listComments, {
          filter: {
            parentComentId: {eq: id},
            childCommentId: {attributeExists: true},
          },
        }),
      );
      return {...list};
    }

    if (nextToken) {
      const {
        data: {listComments: list},
      } = await API.graphql(
        graphqlOperation(listComments, {
          filter: {
            parentComentId: {eq: id},
            childCommentId: {attributeExists: true},
          },
          limit: 6,
          nextToken,
        }),
      );
      return {...list};
    }
    const {
      data: {listComments: list},
    } = await API.graphql(
      graphqlOperation(listComments, {
        limit: 6,
        filter: {
          parentComentId: {eq: id},
          childCommentId: {attributeExists: true},
        },
      }),
    );
    return {...list};
  } catch ({code, message}) {
    console.log('listComments', code, message);
  }
};

export const listUserFollowings = async (
  id = userId,
  nextToken = null,
  noLimit = false,
) => {
  try {
    if (noLimit) {
      const {
        data: {listFollowerings: list},
      } = await API.graphql(
        graphqlOperation(listFollowerings, {filter: {userID: {eq: id}}}),
      );
      return {...list};
    }

    if (nextToken) {
      const {
        data: {listFollowerings: list},
      } = await API.graphql(
        graphqlOperation(listFollowerings, {
          filter: {userID: {eq: id}},
          limit: 6,
          nextToken,
        }),
      );
      return {...list};
    }
    const {
      data: {listFollowerings: list},
    } = await API.graphql(
      graphqlOperation(listFollowerings, {
        limit: 6,
        filter: {userID: {eq: id}},
      }),
    );
    return {...list};
  } catch ({code, message}) {
    console.log('listFollowerings', code, message);
  }
};

export const listUserFollowers = async (
  id = userId,
  nextToken = null,
  noLimit = false,
) => {
  try {
    if (noLimit) {
      const {
        data: {listFollowers: list},
      } = await API.graphql(
        graphqlOperation(listFollowers, {filter: {userID: {eq: id}}}),
      );
      return {...list};
    }

    if (nextToken) {
      const {
        data: {listFollowers: list},
      } = await API.graphql(
        graphqlOperation(listFollowers, {
          filter: {userID: {eq: id}},
          limit: 6,
          nextToken,
        }),
      );
      return {...list};
    }
    const {
      data: {listFollowers: list},
    } = await API.graphql(
      graphqlOperation(listFollowers, {
        limit: 6,
        filter: {userID: {eq: id}},
      }),
    );
    return {...list};
  } catch ({code, message}) {
    console.log('listFollowers', code, message);
  }
};

export const getClickedPost = async id => {
  try {
    const {
      data: {getPost: list},
    } = await API.graphql(
      graphqlOperation(getPost, {
        id,
      }),
    );

    console.log('Sucess');

    return list;
  } catch (error) {
    console.log('getClickedPost', error);
  }
};

export const getClickedComment = async id => {
  try {
    const {
      data: {getComment: list},
    } = await API.graphql(
      graphqlOperation(getComment, {
        id,
      }),
    );

    console.log('Sucess');

    return list;
  } catch (error) {
    console.log('getClickedComment', error);
  }
};
