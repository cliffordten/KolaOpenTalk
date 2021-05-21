import ReduxTypes from '../types.redux';

export const setCurrentUser = user => ({
  type: ReduxTypes.setCurrentUser,
  payload: user,
});

export const setUserList = list => ({
  type: ReduxTypes.setUserList,
  payload: list,
});
