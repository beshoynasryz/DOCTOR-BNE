import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const MyAppointments = () => {
  const { doctors } = useContext(AppContext);

  return (
    <div className="p-6  min-h-screen">
      <h1 className="text-2xl text-center font-bold mb-6">My Appointments</h1>
      <div className="space-y-4">
        {doctors.slice(0, 2).map((doctor, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-md flex flex-col sm:flex-row gap-6"
          >
            {/* Doctor Image */}
            <div className="flex-shrink-0 sm:w-32 sm:h-32">
              <img
                src={doctor.image}
                alt={doctor.name}
                className="w-full h-full rounded-lg object-cover"
              />
            </div>

            {/* Doctor Details */}
            <div className="flex-1">
              <h2 className="text-xl font-semibold">{doctor.name}</h2>
              <p className="text-sm text-gray-600 mt-1">{doctor.speciality}</p>
              <div className="mt-4">
                <p className="text-sm text-gray-600">Address:</p>
                <p className="text-sm text-gray-600">{doctor.address.line1}</p>
                <p className="text-sm text-gray-600">{doctor.address.line2}</p>
              </div>
              <p className="mt-4 text-sm text-gray-600">
                <span className="font-medium">Date & Time</span>: 25-12-2022 | 10:00 AM to 11:00 AM
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 mt-4 sm:mt-0">
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300"
                onClick={() => alert(`Pay Online for ${doctor.name}`)}
              >
                Pay Online
              </button>
              <button
                className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition duration-300"
                onClick={() => alert(`Cancel Appointment with ${doctor.name}`)}
              >
                Cancel Appointment
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyAppointments;