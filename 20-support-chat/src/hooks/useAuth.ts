import { useQuery } from '@tanstack/react-query';
import { checkAuth } from '@/mock/fake-data';

export const useAuth = () => {
  const {
    data: user,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['user'],
    queryFn: () => {
      const token = localStorage.getItem('token');

      if (!token) {
        throw new Error('No token found');
      }

      return checkAuth(token);
    },
    retry: 1,
    staleTime: 5 * 60 * 1000, // 5 minutes
  });

  return { user, isLoading, isError, isAuthenticated: !!user };
};
