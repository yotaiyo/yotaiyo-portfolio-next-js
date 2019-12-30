export type Repo = {
  title: string;
  url: string;
  topics: string[];
  homepage: string | null;
  description: string;
};

export type GithubState = {
  repos: Repo[];
  hasError: boolean;
};

export type InitialState = {
  github: GithubState;
};
