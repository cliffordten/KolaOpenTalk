import {combineReducers} from 'redux';
import {userReducer} from './user';
import {categoryReducer} from './category';

const rootReducer = combineReducers({
  user: userReducer,
  category: categoryReducer,
});

export default rootReducer;
