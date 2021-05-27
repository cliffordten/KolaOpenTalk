import {combineReducers} from 'redux';
import {userReducer} from './user';
import {categoryReducer} from './category';
import {followReducer} from './follow';
import {postReducer} from './post';
import {commentReducer} from './comment';
import {likeReducer} from './like';

const rootReducer = combineReducers({
  user: userReducer,
  category: categoryReducer,
  follow: followReducer,
  post: postReducer,
  comment: commentReducer,
  like: likeReducer,
});

export default rootReducer;
