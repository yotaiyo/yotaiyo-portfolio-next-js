import Octokit from '@octokit/rest';

export const getRepos = async (userName: string) => {
  const octokit = new Octokit();
  try {
    const res = await octokit.search.repos({ q: `user:${userName}` });
    return {
      success: {
        repos: res.data.items
      },
      hasError: false
    };
  } catch (e) {
    return {
      success: null,
      hasError: true
    };
  }
};
