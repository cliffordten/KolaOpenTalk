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
  if (action?.type === 'ERROR') {
    console.log(action?.payload);
  }
  next(action);
};

const middleware = applyMiddleware(refreshTokenMiddleWare, thunk);

const store = createStore(rootReducer, initialState, middleware);

export default store;
