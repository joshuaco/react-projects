import { useQuery } from '@tanstack/react-query';
import { getIssue } from '@/services';

export const useIssue = (issueNumber: number) => {
  const queryIssue = useQuery({
    queryKey: ['issue', issueNumber],
    queryFn: () => getIssue(issueNumber),
    refetchOnWindowFocus: false,
    staleTime: 1000 * 60,
  });

  return { queryIssue };
};
