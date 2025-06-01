import { useAuth } from '@/hooks/useAuth';
import { Navigate } from 'react-router';

interface Props {
  children: React.ReactNode;
}

function PrivateRoute({ children }: Props) {
  const { isLoading, isAuthenticated } = useAuth();

  if (isLoading) return <p>Loading...</p>;

  if (!isAuthenticated) {
    return <Navigate to="/auth" />;
  }
  return children;
}

export default PrivateRoute;
