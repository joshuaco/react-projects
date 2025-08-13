import { useQuery } from '@tanstack/react-query';
import { getIssues } from '@/services';
import type { IssueStateType } from '@/types';

interface Props {
  state: IssueStateType;
}

export const useIssues = ({ state }: Props) => {
  const { data: issues } = useQuery({
    queryKey: ['issues', state],
    queryFn: () => getIssues(state),
    refetchOnWindowFocus: false,
  });

  return { issues };
};
