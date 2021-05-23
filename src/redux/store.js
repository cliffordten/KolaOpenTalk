import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const initialState = {};

const refreshTokenMiddleWare = res => next => async action => {
  console.log(
    '----------------------- ACTION_FIRED :',
    action?.type,
    '-----------------------',
  );
  next(action);
};

const middleware = applyMiddleware(refreshTokenMiddleWare, thunk);

const store = createStore(rootReducer, initialState, middleware);

export default store;
