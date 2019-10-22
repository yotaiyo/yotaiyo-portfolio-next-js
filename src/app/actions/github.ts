import axios from 'axios';
import { ThunkDispatch } from 'redux-thunk';
import { InitialState } from '../store/makeStore';

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

const convertFetchReposResult = (fetchReposSuccessResult: any): Repo[] => {
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
