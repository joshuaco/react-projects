import { toast } from 'react-toastify';
import { usePatientStore } from '../store';
import { Patient } from '../types';
import PatientDetailsItem from './PatientDetailsItem';

type PatientDetailsProps = {
  patient: Patient;
};

function PatientDetails({ patient }: PatientDetailsProps) {
  const deletePatient = usePatientStore((state) => state.deletePatient);
  const getPatientByID = usePatientStore((state) => state.getPatientByID);

  const handleDelete = () => {
    deletePatient(patient.id);
    toast.error('Patient deleted successfully');
  };

  return (
    <article className="shadow-md px-5 py-10 rounded-lg bg-white">
      <div className="flex justify-between flex-col lg:flex-row">
        <div>
          <PatientDetailsItem label="Nombre" data={patient.name} />
          <PatientDetailsItem label="Propietario" data={patient.caretaker} />
          <PatientDetailsItem label="Email" data={patient.email} />
          <PatientDetailsItem label="Fecha" data={patient.date.toString()} />
          <PatientDetailsItem label="Sintomas" data={patient.symptoms} />
        </div>

        <div className="flex gap-4 lg:flex-col flex-row mt-8 lg:mt-0">
          <button
            className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 w-full
           text-white font-bold rounded-lg"
            onClick={() => getPatientByID(patient.id)}
          >
            Editar
          </button>
          <button
            className="py-2 px-8 bg-red-600 hover:bg-red-700 w-full
          text-white font-bold rounded-lg"
            onClick={handleDelete}
          >
            Eliminar
          </button>
        </div>
      </div>

      <p className="text-xs text-gray-500 text-end">
        ID: {''}
        <span className="font-semibold">{patient.id}</span>
      </p>
    </article>
  );
}

export default PatientDetails;
