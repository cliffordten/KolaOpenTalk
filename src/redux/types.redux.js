const ReduxTypes = {
  user: {
    setCurrentUser: 'SET_CURRENT_USER',
    setUserList: 'SET_USER_LIST',
    setUserBlackList: 'SET_USER_BLACK_LIST',
  },
  category: {
    listCategories: 'LIST_CATERGORY',
    saveUserCategory: 'SAVE_USER_CATERGORY',
  },
  post: {
    listPost: 'LIST_POST',
    createPost: 'CREATE_POST',
  },
  follow: {
    listFollowing: 'LIST_FOLLOWING',
    saveFollowing: 'SAVE_USER_FOLLOWING',
  },
  exception: {
    error: 'ERROR',
    success: 'SUCCESS',
    loading: 'LOADING',
  },
};

export default ReduxTypes;
