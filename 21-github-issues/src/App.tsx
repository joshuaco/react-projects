import { Routes, Route } from 'react-router';
import MainLayout from './layouts/main-layout';
import Home from './pages/home';

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;
