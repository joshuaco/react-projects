import { Outlet } from 'react-router';
import Header from '@/components/ui/header';

function MainLayout() {
  return (
    <>
      <Header />
      <main className='px-6 py-3 space-y-6'>
        <Outlet />
      </main>
    </>
  );
}

export default MainLayout;
