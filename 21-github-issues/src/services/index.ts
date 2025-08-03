import type { GitHubIssue, GithubLabel } from '@/types';
import { githubApi } from '@/api/github';

export const getLabels = async () => {
  const { data } = await githubApi.get<GithubLabel[]>('/labels');

  return data;
};

export const getIssues = async () => {
  const { data } = await githubApi.get<GitHubIssue[]>('/issues');

  return data;
};
