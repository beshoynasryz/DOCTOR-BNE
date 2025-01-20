import React, { useState } from 'react';
import { assets } from '../assets/assets';

const MyProfile = () => {
  const [userData, setUserData] = useState({
    name: 'Beshoy Nasry',
    image: assets.profile_pic,
    email: 'beshoynasry0@gmail.com',
    address: {
      line1: '8th khalel, el nozha, Cairo',
      line2: 'Circle, Ring Road, London',
    },
    phone: '01095604355',
    gender: 'Male',
    dob: '18/06/2001',
  });

  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState({ ...userData });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSave = () => {
    setUserData(formData);
    setEditMode(false);
  };

  const handleCancel = () => {
    setFormData({ ...userData });
    setEditMode(false);
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <div className="flex flex-col items-center">
        <img
          src={userData.image}
          alt="Profile"
          className="w-24 h-24 rounded-full object-cover mb-4"
        />
        <h2 className="text-2xl font-semibold mb-2">{userData.name}</h2>
        <button
          className="bg-primary text-white px-4 py-2 rounded"
          onClick={() => setEditMode(!editMode)}
        >
          {editMode ? 'View Profile' : 'Edit Profile'}
        </button>
      </div>

      <div className="mt-6">
        {editMode ? (
          <div className="space-y-4">
            <div>
              <label className="block font-medium">Name:</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full border border-gray-300 rounded p-2"
              />
            </div>
            <div>
              <label className="block font-medium">Email:</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full border border-gray-300 rounded p-2"
              />
            </div>
            <div>
              <label className="block font-medium">Phone:</label>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full border border-gray-300 rounded p-2"
              />
            </div>
            <div>
              <label className="block font-medium">Gender:</label>
              <select
                name="gender"
                value={formData.gender}
                onChange={handleInputChange}
                className="w-full border border-gray-300 rounded p-2"
              >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div>
              <label className="block font-medium">Date of Birth:</label>
              <input
                type="date"
                name="dob"
                value={formData.dob}
                onChange={handleInputChange}
                className="w-full border border-gray-300 rounded p-2"
              />
            </div>
            <div>
              <label className="block font-medium">Address Line 1:</label>
              <input
                type="text"
                name="address.line1"
                value={formData.address.line1}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    address: { ...prev.address, line1: e.target.value },
                  }))
                }
                className="w-full border border-gray-300 rounded p-2"
              />
            </div>
            <div>
              <label className="block font-medium">Address Line 2:</label>
              <input
                type="text"
                name="address.line2"
                value={formData.address.line2}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    address: { ...prev.address, line2: e.target.value },
                  }))
                }
                className="w-full border border-gray-300 rounded p-2"
              />
            </div>
            <div className="flex justify-end space-x-4">
              <button
                className="bg-gray-300 text-gray-800 px-4 py-2 rounded"
                onClick={handleCancel}
              >
                Cancel
              </button>
              <button
                className="bg-primary text-white px-4 py-2 rounded"
                onClick={handleSave}
              >
                Save
              </button>
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            <p>
              <strong>Email:</strong> {userData.email}
            </p>
            <p>
              <strong>Phone:</strong> {userData.phone}
            </p>
            <p>
              <strong>Gender:</strong> {userData.gender}
            </p>
            <p>
              <strong>Date of Birth:</strong> {userData.dob}
            </p>
            <p>
              <strong>Address:</strong> {userData.address.line1}, {userData.address.line2}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyProfile;
