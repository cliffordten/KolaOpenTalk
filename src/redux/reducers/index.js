import {combineReducers} from 'redux';
import {userReducer} from './user';
import {categoryReducer} from './category';
import {followReducer} from './follow';

const rootReducer = combineReducers({
  user: userReducer,
  category: categoryReducer,
  follow: followReducer,
});

export default rootReducer;
