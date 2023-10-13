import React, { useState } from 'react';

const DeleteAccountModal = ({ closeModal, onDeleteAccount }) => {
  const [deleteText, setDeleteText] = useState('');

  const handleChange = (event) => {
    setDeleteText(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (deleteText === 'delete') {
      // Perform account deletion
      onDeleteAccount(localStorage.getItem('authToken'));
      closeModal();
    } else {
      alert('Please enter the correct text to delete your account.');
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="w-full max-w-md bg-white rounded-lg">
        <div className="px-4 py-4">
          <h3 className="text-2xl font-semibold mb-4">Delete Account</h3>
          <p className="mb-4">
            Are you sure you want to delete your account? This action cannot be undone. If you are sure,
            please type <strong>delete</strong> below and click on the "Delete" button.
          </p>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={deleteText}
              onChange={handleChange}
              className="w-full p-2 mb-4 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
              placeholder="Type 'delete' to confirm"
              onKeyDown={(event) => {
                if (event.key === 'Enter') {
                  event.preventDefault();
                }
              }}
            />
            <div className="flex justify-end space-x-4">
              <button onClick={closeModal} className="px-4 py-2 font-semibold text-gray-700 bg-gray-200 rounded-md hover:bg-gray-300 focus:outline-none">
                Cancel
              </button>
              <button type="submit" className="px-4 py-2 font-semibold text-white bg-red-600 rounded-md hover:bg-red-700 focus:outline-none">
                Delete
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default DeleteAccountModal;
