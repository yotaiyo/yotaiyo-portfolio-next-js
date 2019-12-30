import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { github, GithubState } from '../../reducers/github';

export type InitialState = {
  github: GithubState;
};

const rootReducer = combineReducers({ github });

export const makeStore = (initialState: InitialState) => {
  return createStore(rootReducer, initialState, applyMiddleware(thunk));
};
