import { useInfiniteQuery } from '@tanstack/react-query';
import { fetchData } from '../services/users';
import { User } from '../types.d';

export const useUsers = () => {
  const { isError, isLoading, data, fetchNextPage, refetch, hasNextPage } =
    useInfiniteQuery<{ data: User[]; nextPage?: number }>({
      queryKey: ['users'],
      queryFn: ({ pageParam }) => fetchData(pageParam as number),
      initialPageParam: 1,
      getNextPageParam: (lastPage) => lastPage.nextPage,
      refetchOnWindowFocus: false
    });

  return {
    isError,
    isLoading,
    users: data?.pages.flatMap((page) => page.data) || [],
    fetchNextPage,
    refetch,
    hasNextPage
  };
};
