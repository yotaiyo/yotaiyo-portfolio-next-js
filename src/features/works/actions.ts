import axios from 'axios';
import { ThunkDispatch } from 'redux-thunk';
import { InitialState } from 'src/app/makeStore';
import { convertFetchReposResult } from 'src/common/utils/showRepos';

export type Repo = {
  title: string;
  url: string;
  topics: string[];
  homepage: string | null;
  description: string;
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

export const getRepos = () => async (
  dispatch: ThunkDispatch<InitialState, undefined, Action>
) => {
  await axios
    .get(`https://api.github.com/users/${process.env.GITHUB_USER_NAME}/repos`, {
      headers: {
        Authorization: `Bearer ${process.env.GITHUB_API_TOKEN}`,
        Accept: 'application/vnd.github.mercy-preview+json'
      }
    })
    .then(res => {
      dispatch(addRepos(convertFetchReposResult(res.data)));
    })
    .catch(() => {
      dispatch(addHasError(true));
    });
};
