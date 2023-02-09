import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import animalsReducer from './animals/animals';

const reducer = combineReducers({
  animalsReducer,
});

const store = createStore(
  reducer,
  applyMiddleware(logger, thunkMiddleware),
);

export default store;
