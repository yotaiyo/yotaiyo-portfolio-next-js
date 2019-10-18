import axios from 'axios';

type FetchRepos = {
  userName?: string;
  token?: string;
};

export const fetchRepos = async ({ userName, token }: FetchRepos) => {
  try {
    const result = await axios.get(
      `https://api.github.com/users/${userName}/repos`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: 'application/vnd.github.mercy-preview+json'
        }
      }
    );
    return {
      success: result ? result.data : null,
      error: ''
    };
  } catch (err) {
    return {
      success: null,
      error: err.response.data.message
    };
  }
};
