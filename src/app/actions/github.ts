import { fetchRepos } from '../lib/api';

export type Repo = {
  title: String;
};

const ADD_REPOS = 'ADD_REPOS';
const ADD_HAS_ERROR = 'ADD_HAS_ERROR';

const addRepos = (repos: Repo[]) => {
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

const convertFetchReposResult = (fetchReposSuccessResult: any): Repo[] => {
  const repos = [];
  fetchReposSuccessResult.map((repo: any) => {
    repos.push({ title: repo.name });
  });
  return repos;
};

export const getRepos = () => async dispatch => {
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
