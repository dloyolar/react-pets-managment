import { useState } from 'react';

export const Form = () => {
  const [patient, setPatient] = useState({
    name: '',
    owner: '',
    email: '',
    discharge: '',
    symptoms: '',
  });

  const [error, setError] = useState(false);

  const { name, owner, email, discharge, symptoms } = patient;

  const handleChange = (e) => {
    setPatient({ ...patient, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    setError(false);
    e.preventDefault();

    if (Object.values(patient).includes('')) {
      return setError(true);
    }
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
        {error && (
          <div className="bg-red-800 text-white text-center p-3 uppercase font-bold mb-3 rounded-lg">
            <p>Error, form incomplete</p>
          </div>
        )}
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
          value="Add patient"
        />
      </form>
    </div>
  );
};
