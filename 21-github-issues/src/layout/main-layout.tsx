import { Outlet } from 'react-router';

function MainLayout() {
  return (
    <>
      <header className="p-4">
        <h1 className="text-3xl font-bold">Git Issues</h1>
        <p className="text-sm text-gray-500">Seguimiento de problemas</p>
      </header>
      <main className="flex flex-col p-4 mt-2 container">
        <Outlet />
      </main>
    </>
  );
}

export default MainLayout;
