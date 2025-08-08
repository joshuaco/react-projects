import { getIssue, getIssueComments } from '@/services';
import { useQuery } from '@tanstack/react-query';

export const useIssue = (issueNumber: number) => {
  const queryIssue = useQuery({
    queryKey: ['issue', issueNumber],
    queryFn: () => getIssue(issueNumber),
    refetchOnWindowFocus: false,
    staleTime: 1000 * 60,
  });

  const queryComments = useQuery({
    queryKey: ['issue', issueNumber, 'comments'],
    queryFn: () => getIssueComments(issueNumber),
    refetchOnWindowFocus: false,
    staleTime: 1000 * 60,
    enabled: !!queryIssue.data,
  });

  return { queryIssue, queryComments };
};
