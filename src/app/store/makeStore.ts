import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import axios from 'axios';

type FetchRepos = {
  userName: string;
  token: string;
};

export const fetchRepos = async ({ userName, token }: FetchRepos) => {
  try {
    const result = await axios.get(
      `https://api.github.com/users/${userName}/repos`,
      {
        headers: {
          Authorization: { token }
        }
      }
    );
    return {
      success: result.data,
      error: ''
    };
  } catch (err) {
    return {
      success: null,
      error: err.response.data.message
    };
  }
};

type Repos = {
  title: String;
};

type Works = {
  repos: Repos[];
  hasError: boolean;
};

const initialState: Works = {
  repos: [],
  hasError: true
};

const reducer = (state: Works = initialState, action) => {
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

const addRepos = (repos: Repos[]) => {
  return {
    type: 'ADD_REPOS',
    payload: {
      repos
    }
  };
};

const addHasError = (hasError: boolean) => {
  return {
    type: 'ADD_HAS_ERROR',
    payload: {
      hasError
    }
  };
};

const convertFetchReposResult = (fetchReposResult: any) => {
  const repos = [];
  fetchReposResult.success.map((repo: any) => {
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
    const repos = convertFetchReposResult(fetchReposResult);
    dispatch(addRepos(repos));
  } else {
    dispatch(addHasError(true));
  }
};

export const makeStore = () => {
  return createStore(reducer, applyMiddleware(thunk));
};
