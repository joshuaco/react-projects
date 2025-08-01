import { useQuery } from '@tanstack/react-query';
import { getLabels } from '@/services';

export const useLabels = () => {
  const { data: labels } = useQuery({
    queryKey: ['labels'],
    queryFn: getLabels,
  });

  return { labels };
};
