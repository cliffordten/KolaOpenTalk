const ReduxTypes = {
  user: {
    loginUser: 'LOGIN_USER',
    logoutUser: 'LOGOUT_USER',
    setLoginError: 'SET_LOGIN_ERROR',
    setCurrentUser: 'SET_CURRENT_USER',
    setUserList: 'SET_USER_LIST',
    searchUser: 'SEARCHING_USER',
    setUserBlackList: 'SET_USER_BLACK_LIST',
  },
  category: {
    listCategories: 'LIST_CATERGORY',
    saveUserCategory: 'SAVE_USER_CATERGORY',
  },
  post: {
    listPost: 'LIST_POST',
    createPost: 'CREATE_POST',
    getPost: 'GET_CLICKED_POST',
  },
  comment: {
    getComment: 'GET_CLICKED_COMMENTT',
    listComment: 'LIST_POST_COMMENT',
    listChildComment: 'LIST_CHILD_COMMENT',
    createPostComment: 'CREATE_POST_COMMENT',
    createChildComment: 'CREATE_CHILD_COMMENT',
  },
  like: {
    getIsLikeInfo: 'GET_IS_LIKE_INFO',
    createLike: 'CREATE_IS_LIKE',
    deleteLike: 'DELETE_IS_LIKE',
  },
  follow: {
    listFollowing: 'LIST_FOLLOWING',
    saveFollowing: 'SAVE_USER_FOLLOWING',
    saveUnFollowing: 'SAVE_USER_UN_FOLLOWING',
  },
  exception: {
    error: 'ERROR',
    success: 'SUCCESS',
    loading: 'LOADING',
    searching: 'SEARCHING',
  },
};

export default ReduxTypes;
