import { useEffect, useState } from 'react';
import { Form } from './components/Form';
import { Header } from './components/Header';
import { PatientsList } from './components/PatientsList';

function App() {
  const [patients, setPatients] = useState([]);
  const [patient, setPatient] = useState({});

  useEffect(() => {
    const getLS = () => {
      const patients = JSON.parse(localStorage.getItem('patients')) ?? [];
      console.log(patients);
      setPatients(patients);
    };

    getLS();
  }, []);

  useEffect(() => {
    localStorage.setItem('patients', JSON.stringify(patients));
  }, [patients]);

  const deletePatient = (id) => {
    const updatesPatients = patients.filter((pat) => pat.id !== id);
    setPatients(updatesPatients);
  };

  return (
    <div className="container mx-auto mt-20">
      <Header />
      <div className="mt-12 md:flex">
        <Form
          patientSelected={patient}
          setPatients={setPatients}
          patients={patients}
          handlePatientSelected={setPatient}
        />
        <PatientsList
          patients={patients}
          setPatient={setPatient}
          deletePatient={deletePatient}
        />
      </div>
    </div>
  );
}

export default App;
