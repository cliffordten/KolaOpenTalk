import ReduxTypes from '../types.redux';

export const setCurrentUser = user => ({
  type: ReduxTypes.setCurrentUser,
  payload: user,
});
