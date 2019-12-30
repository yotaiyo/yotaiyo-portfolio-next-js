import { Repo } from 'src/features/works/actions';

const showRepos = [
  {
    title: 'portfolio',
    description:
      '私のポートフォリオサイト。\nworksはGitHub APIから動的に生成。\nデザインはfigmaで作成。'
  },
  {
    title: 'music-auto-tagging',
    description:
      '楽曲波形のジャンル、ムード、楽器といったタグを予測する楽曲タグ予測モデルの作成、評価を行う。\nMagnaTagATuneと呼ばれる大規模データセットを用いる。'
  },
  {
    title: 'to-do-app-frontend',
    description:
      'フィルタリングや締切の設定といった機能が実装されているタスク管理アプリケーションのフロントエンド部実装。'
  },
  {
    title: 'to-do-app-backend',
    description:
      'フィルタリングや締切の設定といった機能が実装されているタスク管理アプリケーションのバックエンド部実装。'
  },
  {
    title: 'weather-app',
    description:
      'APIを叩いて向こう3日間の情報を表示するお天気アプリケーション。\n初めて作成したアプリケーション。'
  },
  {
    title: 'tinder-card',
    description: 'TinderのカードUIの再現実装。\nスマホのブラウザ環境を想定'
  },
  {
    title: 'to-do-app-hooks',
    description:
      'タスク管理アプリケーションのフロントエンド部実装。\nReact Hooksを用い、Class Componentを使用しないような実装にしている。'
  },
  {
    title: 'music-genre-classification',
    description:
      '楽曲波形のジャンルを予測する楽曲タグ予測モデルの作成、評価を行う。\nGTZANと呼ばれるデータセットを用いる。'
  }
];

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
