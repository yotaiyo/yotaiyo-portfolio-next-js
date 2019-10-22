import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { github, githubState } from '../reducers/github';

export type InitialState = {
  github: githubState;
};

const rootReducer = combineReducers({ github });

export const makeStore = (initialState: InitialState) => {
  return createStore(rootReducer, initialState, applyMiddleware(thunk));
};
