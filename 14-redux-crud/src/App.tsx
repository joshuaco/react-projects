import { Toaster } from 'sonner';
import CreateUser from './components/CreateUser';
import UsersList from './components/UsersList';

function App() {
  return (
    <div>
      <UsersList />
      <CreateUser />
      <Toaster richColors />
    </div>
  );
}

export default App;
