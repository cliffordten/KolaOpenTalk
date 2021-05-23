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
  follow: {
    listFollowing: 'LIST_FOLLOWING',
    saveFollowing: 'SAVE_USER_FOLLOWING',
  },
  exception: {
    error: 'ERROR',
    success: 'SUCCESS',
  },
};

export default ReduxTypes;
