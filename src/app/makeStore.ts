import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { rootReducer } from './rootReducer';
import { InitialState } from 'src/common/types/state';

export const makeStore = (initialState: InitialState) => {
  return createStore(rootReducer, initialState, applyMiddleware(thunk));
};
