import { Routes, Route } from 'react-router';
import MainLayout from './layouts/main-layout';
import IssuePage from './pages/issue-page';
import Home from './pages/home';

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="/issue/:id" element={<IssuePage />} />
      </Route>
    </Routes>
  );
}

export default App;
