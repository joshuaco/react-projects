import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Modal from '../components/Modal';
import { useAppStore } from '../stores/useAppStore';
import Notification from '../components/Notification';

function Layout() {
  const loadFromStorage = useAppStore((state) => state.loadFromStorage);

  useEffect(() => {
    loadFromStorage();
  }, []);

  return (
    <>
      <Header />

      <main className='container mx-auto px-5 lg:px-32 py-6'>
        <Outlet />
      </main>

      <Modal />
      <Notification />
    </>
  );
}

export default Layout;
