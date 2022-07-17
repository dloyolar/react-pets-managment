import { useEffect, useState } from 'react';
import { Error } from './Error';

export const Form = ({ setPatients, patientSelected }) => {
  const [patient, setPatient] = useState({
    name: '',
    owner: '',
    email: '',
    discharge: '',
    symptoms: '',
    id: '',
  });

  const generateRandom = () => {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
  };

  const [error, setError] = useState(false);

  useEffect(() => {
    if (Object.keys(patientSelected).length > 0) {
      setPatient(patientSelected);
    }
  }, [patientSelected]);

  const { name, owner, email, discharge, symptoms } = patient;

  const handleChange = (e) => {
    setPatient({ ...patient, [e.target.name]: e.target.value });
  };

  const resetForm = () => {
    setPatient({
      name: '',
      owner: '',
      email: '',
      discharge: '',
      symptoms: '',
      id: '',
    });
  };

  const handleSubmit = (e) => {
    setError(false);
    e.preventDefault();

    const newPatient = {
      name,
      owner,
      email,
      discharge,
      symptoms,
      id: generateRandom(),
    };

    if (Object.values(newPatient).includes('')) {
      return setError(true);
    }

    setPatients((prev) => [newPatient, ...prev]);
    resetForm();
  };

  return (
    <div className="md:w-1/2 lg:w-2/5">
      <h2 className="font-black text-3xl text-center">Patient Follow-UP</h2>
      <p className="text-lg mt-5 text-center mb-10">
        Add Patients and{' '}
        <span className="text-indigo-600 font-bold">MANAGE THEM</span>
      </p>

      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg py-10 px-5 mb-10"
      >
        {error && <Error msg={'Error! Form incomplete'} />}
        <div className="mb-5">
          <label
            htmlFor="pet"
            className="block text-gray-700 uppercase font-bold"
          >
            Pet Name {name}
          </label>
          <input
            id="pet"
            type="text"
            placeholder="Pet name"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            name="name"
            value={name}
            onChange={handleChange}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="owner"
            className="block text-gray-700 uppercase font-bold"
          >
            Owner Name
          </label>
          <input
            id="owner"
            type="text"
            placeholder="Owner name"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            name="owner"
            value={owner}
            onChange={handleChange}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="email"
            className="block text-gray-700 uppercase font-bold"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="email@mail.com"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="discharge"
            className="block text-gray-700 uppercase font-bold"
          >
            Discharge Date
          </label>
          <input
            id="discharge"
            type="date"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            name="discharge"
            value={discharge}
            onChange={handleChange}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="symptoms"
            className="block text-gray-700 uppercase font-bold"
          >
            Symptoms
          </label>
          <textarea
            id="symptoms"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            placeholder="Describe the symptoms"
            name="symptoms"
            value={symptoms}
            onChange={handleChange}
          />
        </div>

        <input
          type="submit"
          className="bg-indigo-600 w-full p-3 text-white font-bold uppercase rounded-lg hover:bg-indigo-700 cursor-pointer transition-colors"
          value={patientSelected.id ? 'Update patient' : 'Add patient'}
        />
      </form>
    </div>
  );
};
