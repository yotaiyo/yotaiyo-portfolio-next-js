import { Repo } from 'src/common/types/state';
import { showRepos } from 'consts/showRepos';

const showReposTitle: string[] = [];
showRepos.forEach(showRepo => {
  showReposTitle.push(showRepo.title);
});

export const convertFetchReposResult = (
  fetchReposSuccessResult: any
): Repo[] => {
  const repos: Repo[] = [];
  fetchReposSuccessResult.map((repo: any) => {
    const showRepoIndex = showReposTitle.indexOf(repo.name);
    if (showRepoIndex >= 0) {
      repos.push({
        title: repo.name,
        url: repo.html_url,
        topics: repo.topics,
        homepage: repo.homepage,
        description: showRepos[showRepoIndex].description
      });
    }
  });
  return repos;
};
