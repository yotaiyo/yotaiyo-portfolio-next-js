import { Repo } from '../actions/github';
import { Type, Action } from '../actions/github';

const initialGithubState = {
  repos: [],
  hasError: true
};

export type githubState = {
  repos: Repo[];
  hasError: boolean;
};

export const github = (
  state: githubState = initialGithubState,
  action: Action
): githubState => {
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
