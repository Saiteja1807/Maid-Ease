import React, { useState } from 'react';
import axios from 'axios';

const EditProfileModal = ({ closeModal, userDetails, onUpdate }) => {
  const [updatedUserDetails, setUpdatedUserDetails] = useState({ ...userDetails, email: undefined, password: undefined });

  const handleChange = (event) => {
    setUpdatedUserDetails({
      ...updatedUserDetails,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // Replace with your API endpoint
      await axios.put('http://localhost:4000/user/profile', updatedUserDetails, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('authToken')}`,
        },
      });
      onUpdate();
      closeModal();
    } catch (error) {
      console.error('Error updating user data:', error);
    }
  };

  return (
    <div className="fixed z-20 inset-0 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen">
        <div
          className="absolute inset-0 bg-gray-900 opacity-50"
          onClick={closeModal}
        ></div>
        <div className="bg-white rounded-md p-6 mx-auto w-1/2 shadow-xl z-30">
          <h2 className="text-2xl font-semibold mb-4">Edit Profile</h2>
        <form onSubmit={handleSubmit}>
          {Object.entries(updatedUserDetails)
            .filter(([key]) => key !== 'email' && key !== 'password' && key !== '_id' && key !== '__v')
            .map(([key, value]) => (
              <div key={key} className="mb-4">
                <label htmlFor={key} className="block text-sm font-medium text-gray-700">
                  {key.charAt(0).toUpperCase() + key.slice(1)}
                </label>
                <input
                  type="text"
                  name={key}
                  id={key}
                  value={value}
                  onChange={handleChange}
                  className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
                />
              </div>
            ))}
          <div className="flex justify-between">
            <button type="submit" className="px-4 py-2 font-semibold text-white bg-purple-600 rounded-md hover:bg-purple-700 focus:outline-none">
              Save
            </button>
            <button
              onClick={closeModal}
              className="px-4 py-2 font-semibold text-white bg-gray-600 rounded-md hover:bg-gray-700 focus:outline-none"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
    </div>

  );
};

export default EditProfileModal;
