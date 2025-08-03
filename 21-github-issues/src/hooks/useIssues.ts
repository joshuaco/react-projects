import { useQuery } from '@tanstack/react-query';
import { getIssues } from '@/services';

export const useIssues = () => {
  const { data: issues } = useQuery({
    queryKey: ['issues'],
    queryFn: getIssues,
    refetchOnWindowFocus: false,
  });

  return { issues };
};
