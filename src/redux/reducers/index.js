import {combineReducers} from 'redux';
import {userReducer} from './user';
import {categoryReducer} from './category';
import {followReducer} from './follow';
import {postReducer} from './post';
import {commentReducer} from './comment';

const rootReducer = combineReducers({
  user: userReducer,
  category: categoryReducer,
  follow: followReducer,
  post: postReducer,
  comment: commentReducer,
});

export default rootReducer;
