import { Type, Action } from './actions';
import { GithubState } from 'src/common/types/state';

const initialGithubState = {
  repos: [],
  hasError: true
};

export const github = (
  state: GithubState = initialGithubState,
  action: Action
): GithubState => {
  switch (action.type) {
    case Type.ADD_REPOS:
      return {
        ...state,
        repos: action.payload.repos,
        hasError: false
      };
    case Type.ADD_HAS_ERROR:
      return {
        ...state,
        hasError: action.payload.hasError
      };
    default:
      return state;
  }
};
