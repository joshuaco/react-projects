import { Outlet } from 'react-router-dom';
import Header from '../components/Header';

function Layout() {
  return (
    <>
      <Header />

      <main className='container mx-auto px-5 lg:px-32 py-6'>
        <Outlet />
      </main>
    </>
  );
}

export default Layout;
