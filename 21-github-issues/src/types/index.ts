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

export interface GitHubComment {
  author_association: string;
  body: string;
  created_at: string;
  html_url: string;
  id: number;
  issue_url: string;
  node_id: string;
  performed_via_github_app: string | null;
  updated_at: string;
  url: string;
  user: GithubUser;
}

export interface Repository {
  owner: string;
  name: string;
}
