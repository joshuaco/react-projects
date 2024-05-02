import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { usePatientStore } from '../store';
import { DraftPatient } from '../types';
import Error from './Error';

function PatientForm() {
  const { patients, addPatient, activeID, updatePatient } = usePatientStore();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    reset
  } = useForm<DraftPatient>();

  const notify = (action: 'add' | 'update') =>
    action === 'add'
      ? toast.success('Patient added successfully')
      : toast.success('Patient updated successfully');

  useEffect(() => {
    if (activeID) {
      const activePatient = patients.filter(
        (patient) => patient.id === activeID
      )[0];

      setValue('name', activePatient.name);
      setValue('caretaker', activePatient.caretaker);
      setValue('email', activePatient.email);
      setValue('date', activePatient.date);
      setValue('symptoms', activePatient.symptoms);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeID]);

  const registerPatient = (data: DraftPatient) => {
    if (activeID) {
      updatePatient(data);
      notify('update');
    } else {
      addPatient(data);
      notify('add');
    }
    reset();
  };

  return (
    <section className="md:w-1/2 lg:w-2/5 mx-5">
      <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>

      <p className="text-lg mt-5 text-center mb-8">
        Añade Pacientes y {''}
        <span className="text-indigo-600 font-bold">Administralos</span>
      </p>

      <form
        className="bg-white shadow-md rounded-lg py-10 px-5 mb-10"
        noValidate
        onSubmit={handleSubmit(registerPatient)}
      >
        <div className="mb-5">
          <label htmlFor="name" className="text-sm uppercase font-bold">
            Paciente
          </label>
          <input
            id="name"
            className="w-full p-3 border border-gray-100 outline-indigo-600"
            type="text"
            placeholder="Nombre del Paciente"
            {...register('name', {
              required: 'This field is required'
            })}
          />
          {errors.name && <Error>{errors.name.message}</Error>}
        </div>

        <div className="mb-5">
          <label htmlFor="caretaker" className="text-sm uppercase font-bold">
            Propietario
          </label>
          <input
            id="caretaker"
            className="w-full p-3  border border-gray-100 outline-indigo-600"
            type="text"
            placeholder="Nombre del Propietario"
            {...register('caretaker', {
              required: 'This field is required'
            })}
          />
          {errors.caretaker && <Error>{errors.caretaker.message}</Error>}
        </div>

        <div className="mb-5">
          <label htmlFor="email" className="text-sm uppercase font-bold">
            Email
          </label>
          <input
            id="email"
            className="w-full p-3  border border-gray-100 outline-indigo-600"
            type="email"
            placeholder="Email de Registro"
            {...register('email', {
              required: 'This field is required',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Invalid email address'
              }
            })}
          />
          {errors.email && <Error>{errors.email.message}</Error>}
        </div>

        <div className="mb-5">
          <label htmlFor="date" className="text-sm uppercase font-bold">
            Fecha Alta
          </label>
          <input
            id="date"
            className="w-full p-3  border border-gray-100 outline-indigo-600"
            type="date"
            {...register('date', {
              required: 'This field is required'
            })}
          />
          {errors.date && <Error>{errors.date.message}</Error>}
        </div>

        <div className="mb-5">
          <label htmlFor="symptoms" className="text-sm uppercase font-bold">
            Síntomas
          </label>
          <textarea
            id="symptoms"
            className="w-full p-3  border border-gray-100 outline-indigo-600"
            placeholder="Síntomas del paciente"
            {...register('symptoms', {
              required: 'This field is required'
            })}
          />
          {errors.symptoms && <Error>{errors.symptoms.message}</Error>}
        </div>

        <input
          type="submit"
          className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-colors"
          value="Guardar Paciente"
        />
      </form>
    </section>
  );
}

export default PatientForm;
