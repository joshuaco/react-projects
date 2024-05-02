import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import { v4 as uuidv4 } from 'uuid';
import { DraftPatient, Patient } from './types';

type PatientState = {
  patients: Patient[];
  activeID: Patient['id'];
  addPatient: (data: DraftPatient) => void;
  deletePatient: (id: Patient['id']) => void;
  getPatientByID: (id: Patient['id']) => void;
  updatePatient: (data: DraftPatient) => void;
};

const createPatient = (data: DraftPatient): Patient => {
  return {
    ...data,
    id: uuidv4()
  };
};

export const usePatientStore = create<PatientState>()(
  devtools(
    persist(
      (set) => ({
        patients: [],
        activeID: '',
        addPatient: (data) => {
          const newPatient = createPatient(data);
          set((state) => ({
            patients: [...state.patients, newPatient]
          }));
        },
        deletePatient: (id) => {
          set((state) => ({
            patients: state.patients.filter((patient) => patient.id !== id)
          }));
        },
        getPatientByID: (id) => {
          set(() => {
            return { activeID: id };
          });
        },
        updatePatient: (data) => {
          set((state) => ({
            patients: state.patients.map((patient) =>
              patient.id === state.activeID
                ? { id: state.activeID, ...data }
                : patient
            ),
            activeID: ''
          }));
        }
      }),
      {
        name: 'patient-storage'
      }
    )
  )
);
