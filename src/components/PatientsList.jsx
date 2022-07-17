import { Patient } from './Patient';

export const PatientsList = ({ patients, setPatient, deletePatient }) => {
  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
      <h2 className="font-black text-3xl text-center">Patient's List</h2>
      {patients && patients.length ? (
        <>
          <p className="text-xl mt-5 mb-10 text-center">
            Manage your{' '}
            <span className="text-indigo-600 font-bold">
              Patients and Appointments
            </span>
          </p>

          {patients.map((patient) => (
            <Patient
              key={patient.id}
              patient={patient}
              setPatient={setPatient}
              deletePatient={deletePatient}
            />
          ))}
        </>
      ) : (
        <p className="text-xl mt-5 mb-10 text-center">
          Add patients and{' '}
          <span className="text-indigo-600 font-bold">Manage them</span>
        </p>
      )}
    </div>
  );
};
