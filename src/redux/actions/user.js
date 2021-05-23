import ReduxTypes from '../types.redux';

export const setCurrentUser = user => ({
  type: ReduxTypes.user.setCurrentUser,
  payload: user,
});

export const setUserList = list => ({
  type: ReduxTypes.user.setUserList,
  payload: list,
});
