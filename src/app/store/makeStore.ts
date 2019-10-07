import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { githubReducer } from '../reducers/github';

export const makeStore = () => {
  return createStore(githubReducer, applyMiddleware(thunk));
};
