import { fetchRepos } from '../lib/api';
import { AnyAction } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { InitialState } from '../reducers/github';

export type IThunkAction<
  Return,
  ExtraArgument = undefined,
  DispatchAction extends AnyAction = AnyAction
> = ThunkAction<Return, InitialState, ExtraArgument, DispatchAction>;

export type Repos = {
  title: String;
};

const ADD_REPOS = 'ADD_REPOS';
const ADD_HAS_ERROR = 'ADD_HAS_ERROR';

const addRepos = (repos: Repos[]) => {
  return {
    type: ADD_REPOS,
    payload: {
      repos
    }
  };
};

const addHasError = (hasError: boolean) => {
  return {
    type: ADD_HAS_ERROR,
    payload: {
      hasError
    }
  };
};

const convertFetchReposResult = (fetchReposSuccessResult: any): Repos[] => {
  const repos = [];
  fetchReposSuccessResult.map((repo: any) => {
    repos.push({ title: repo.name });
  });
  return repos;
};

export const getRepos = (): IThunkAction<Promise<void>> => async dispatch => {
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
