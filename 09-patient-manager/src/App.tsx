import { ToastContainer } from 'react-toastify';
import PatientForm from './components/PatientForm';
import PatientsList from './components/PatientsList';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <div className="container mx-auto mt-10">
        <h1 className="text-3xl text-center font-bold md:w-2/3 md:mx-auto">
          <span className="text-indigo-700">Veterinary</span> Patient Manager
        </h1>

        <main className="mt-10 md:flex">
          <PatientForm />
          <PatientsList />
        </main>
      </div>

      <ToastContainer />
    </>
  );
}

export default App;
