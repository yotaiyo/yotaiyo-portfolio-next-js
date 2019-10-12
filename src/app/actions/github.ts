import { fetchRepos } from '../lib/api';
import { ThunkDispatch } from 'redux-thunk';
import { githubState } from '../reducers/github';

export type Repo = {
  title: string;
  url: string;
  topics: string[];
  homepage: string | null;
};

export enum Type {
  ADD_REPOS = 'ADD_REPOS',
  ADD_HAS_ERROR = 'ADD_HAS_ERROR'
}

export type Action =
  | {
      type: Type.ADD_REPOS;
      payload: {
        repos: Repo[];
      };
    }
  | {
      type: Type.ADD_HAS_ERROR;
      payload: {
        hasError: boolean;
      };
    };

const addRepos = (repos: Repo[]): Action => {
  return {
    type: Type.ADD_REPOS,
    payload: {
      repos
    }
  };
};

const addHasError = (hasError: boolean): Action => {
  return {
    type: Type.ADD_HAS_ERROR,
    payload: {
      hasError
    }
  };
};

const convertFetchReposResult = (fetchReposSuccessResult: any): Repo[] => {
  const repos: Repo[] = [];
  fetchReposSuccessResult.map((repo: any) => {
    repos.push({
      title: repo.name,
      url: repo.html_url,
      topics: repo.topics,
      homepage: repo.homepage
    });
  });
  return repos;
};

export const getRepos = () => async (
  dispatch: ThunkDispatch<githubState, undefined, Action>
) => {
  const fetchReposResult = await fetchRepos({
    userName: process.env.GITHUB_USER_NAME,
    token: process.env.GITHUB_API_TOKEN
  });
  if (fetchReposResult.success !== null) {
    const repos = convertFetchReposResult(fetchReposResult.success);
    dispatch(addRepos(repos));
  } else {
    dispatch(addHasError(true));
  }
};
