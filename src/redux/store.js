import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const initialState = {};

const refreshTokenMiddleWare = () => next => async action => {
  console.log('log from the store middleware');
  next(action);
};

const middleware = applyMiddleware(refreshTokenMiddleWare, thunk);

const store = createStore(rootReducer, initialState, middleware);

export default store;
