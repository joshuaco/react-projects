import { githubApi } from '@/api/github';
import type { GithubLabel } from '@/types';

export const getLabels = async () => {
  const { data } = await githubApi.get<GithubLabel[]>('/labels');

  return data;
};
