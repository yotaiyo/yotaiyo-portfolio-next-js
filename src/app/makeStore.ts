import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { GithubState } from '../../reducers/github';
import { rootReducer } from './rootReducer';

export type InitialState = {
  github: GithubState;
};

export const makeStore = (initialState: InitialState) => {
  return createStore(rootReducer, initialState, applyMiddleware(thunk));
};
