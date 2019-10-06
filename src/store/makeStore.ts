import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const initialState = {
  test: 0
};

const testReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'TEST':
      return {
        ...state
      };
    default:
      return state;
  }
};

export const makeStore = () => {
  return createStore(testReducer, applyMiddleware(thunk));
};
