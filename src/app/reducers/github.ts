import { Repos } from '../actions/github';
import { AnyAction } from 'redux';

const initialState = {
  repos: [],
  hasError: true
};

export type InitialState = {
  repos: Repos[];
  hasError: boolean;
};

export const githubReducer = (
  state: InitialState = initialState,
  action: AnyAction
) => {
  switch (action.type) {
    case 'ADD_REPOS':
      return {
        ...state,
        repos: action.payload.repos,
        hasError: false
      };
    case 'ADD_HAS_ERROR':
      return {
        ...state,
        hasError: action.payload.hasError
      };
    default:
      return state;
  }
};
