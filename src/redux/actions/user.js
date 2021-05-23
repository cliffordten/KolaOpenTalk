import {User, UserBlackList} from '../../models';
import ReduxTypes from '../types.redux';
import {DataStore} from 'aws-amplify';
import storage from '../../utils/storage';

const userID = storage.readUserId();

export const setCurrentUser = user => ({
  type: ReduxTypes.user.setCurrentUser,
  payload: user,
});

export const setUserList = () => async dispatch => {
  try {
    const blackLists = await DataStore.query(UserBlackList);
    const userList = await DataStore.query(User);

    const filterCurrentUser = userList?.filter(({id}) => userID !== id);

    const filterBlacklist = filterCurrentUser.filter(({id}) =>
      blackLists.every(({blackList}) => blackList.id !== id),
    );

    if (filterBlacklist) {
      dispatch({
        type: ReduxTypes.user.setUserList,
        payload: filterBlacklist,
      });
    }
  } catch (error) {
    dispatch({
      type: ReduxTypes.exception.error,
      payload: {msg: 'Error BlackList User', error},
    });
  }
};

export const blackListUser = (
  blackListUserID,
  userList = [],
) => async dispatch => {
  try {
    const result = await DataStore.save(
      new UserBlackList({
        blackList: {
          id: blackListUserID,
        },
        userID,
      }),
    );
    const filterBlacklist = userList.filter(
      ({id}) => result.blackList.id !== id,
    );

    if (result) {
      dispatch({
        type: ReduxTypes.user.setUserList,
        payload: filterBlacklist,
      });
      dispatch({
        type: ReduxTypes.user.setUserBlackList,
        payload: result,
      });
    }
  } catch (error) {
    dispatch({
      type: ReduxTypes.exception.error,
      payload: {msg: 'Error BlackList User', error},
    });
  }
};
