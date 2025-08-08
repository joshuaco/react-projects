import type { GitHubComment, GitHubIssue, GithubLabel } from '@/types';
import { githubApi } from '@/api/github';

export const getLabels = async () => {
  const { data } = await githubApi.get<GithubLabel[]>('/labels');

  return data;
};

export const getIssues = async () => {
  const { data } = await githubApi.get<GitHubIssue[]>('/issues');

  return data;
};

export const getIssue = async (issueNumber: number) => {
  const { data } = await githubApi.get<GitHubIssue>(`/issues/${issueNumber}`);

  return data;
};

export const getIssueComments = async (issueNumber: number) => {
  const { data } = await githubApi.get<GitHubComment[]>(
    `/issues/${issueNumber}/comments`
  );

  return data;
};
