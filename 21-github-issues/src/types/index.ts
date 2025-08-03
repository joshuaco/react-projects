export interface GithubLabel {
  id: number;
  node_id: string;
  url: string;
  name: string;
  color: string;
  default: boolean;
  description?: string;
}

export interface GithubUser {
  login: string;
  avatar_url: string;
  id: number;
  node_id: string;
  url: string;
}

export interface GitHubIssue {
  url: string;
  repository_url: string;
  labels_url: string;
  comments_url: string;
  comments: number;
  id: number;
  node_id: string;
  number: number;
  title: string;
  body: string;
  state: 'open' | 'closed';
  created_at: string;
  updated_at: string;
  closed_at: string;
  html_url: string;
  user: GithubUser;
  labels: GithubLabel[];
}

export interface Repository {
  owner: string;
  name: string;
}
