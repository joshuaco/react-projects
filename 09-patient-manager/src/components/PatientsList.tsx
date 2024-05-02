import { usePatientStore } from '../store';
import { DogIcon } from './Icons';
import PatientDetails from './PatientDetails';

function PatientsList() {
  const patients = usePatientStore((state) => state.patients);

  return (
    <section className="md:w-1/2 lg:w-3/5 mx-5">
      <h2 className="font-black text-3xl text-center">Listado de Pacientes</h2>
      {patients.length ? (
        <>
          <p className="text-lg mt-5 text-center mb-8">
            Administra tus {''}
            <span className="text-indigo-600 font-bold">Pacientes y Citas</span>
          </p>

          <div className="space-y-5 h-screen md:overflow-y-auto">
            {patients.map((patient) => (
              <PatientDetails key={patient.id} patient={patient} />
            ))}
          </div>
        </>
      ) : (
        <>
          <p className="text-lg mt-5 mb-8 text-center">
            Comienza agregando pacientes {''}
            <span className="text-indigo-600 font-bold">
              y aparecerán en este lugar
            </span>
          </p>

          <h3 className="text-3xl font-bold text-center md:py-12 py-8 px-5">
            No hay Pacientes
            <DogIcon />
          </h3>
        </>
      )}
    </section>
  );
}

export default PatientsList;
