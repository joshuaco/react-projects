import { Routes, Route, Navigate } from 'react-router';
import ListPage from '@/pages/list-page';
import MainLayout from './layout/main-layout';

function Router() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="/" element={<Navigate to="/list" />} />
        <Route path="/list" element={<ListPage />} />
      </Route>
    </Routes>
  );
}

export default Router;
