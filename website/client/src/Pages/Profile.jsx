import React, { useState, useEffect } from 'react';
import DeleteAccountModal from '../components/DeleteAccount';
import EditProfileModal from '../components/EditProfileModal'; // Add this import
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Profile = () => {
  const [showModal, setShowModal] = useState(false);
  const [userDetails, setUserDetails] = useState({});
  const [showEditModal, setShowEditModal] = useState(false);

  const openEditModal = () => {
    setShowEditModal(true);
  };

  const closeEditModal = () => {
    setShowEditModal(false);
  };

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        // Replace with your API endpoint
        const response = await axios.get('http://localhost:4000/user/profile', {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('authToken')}`
          }
        });
        setUserDetails(response.data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, []);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const navigate = useNavigate();

  const goBack = () => {
    navigate('/');
  }
  useEffect(() => {
    reloadUserData();
  }, []);

  const reloadUserData = async () => {
    try {
      // Replace with your API endpoint
      const response = await axios.get('http://localhost:4000/user/profile', {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('authToken')}`
        }
      });
      setUserDetails(response.data);
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  const deleteAccount = async () => {
    try {
      await axios.delete('http://localhost:4000/user/profile', {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('authToken')}`,
        },
      });

      // Sign out and navigate to the home page
      localStorage.removeItem('authToken');
      navigate('/');
      window.location.reload();
    } catch (error) {
      console.error('Error deleting user account:', error);
    }
  };


  const filteredUserDetails = Object.entries(userDetails).filter(([key]) => !['_id', 'password', '__v'].includes(key));

  return (
<div className='bg-[#f2f2f2]'>
      <div className="container mx-auto mt-0 py-6 px-4 min-h-screen">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-mono">Profile</h1>
            <hr className='border-t border-gray-400 my-2' />
            <h2 className="text-2xl font-semibold">{userDetails.firstName} {userDetails.lastName}</h2>
          </div>
          <button
            className="text-blue-600 hover:text-blue-800 focus:outline-none text-lg"
            onClick={openEditModal}
          >
            Edit
          </button>
        </div>
        <table className="w-full table-auto border-collapse">
          <tbody>
            {filteredUserDetails.map(([key, value]) => (
              <tr key={key}>
                <td className="font-semibold text-lg border px-2 py-1">{key.charAt(0).toUpperCase() + key.slice(1)}</td>
                <td className="text-lg border px-2 py-1">{value}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex justify-between mt-8">
          <button
            onClick={openModal}
            className="w-1/5 mr-2 px-4 py-2 font-semibold text-white bg-red-600 rounded-md hover:bg-red-700 focus:outline-none"
          >
            Delete Account
          </button>
          <button
            onClick={goBack}
            className="w-1/5 ml-2 px-4 py-2 font-semibold text-white bg-purple-600 rounded-md hover:bg-purple-700 focus:outline-none"
          >
            Back
          </button>
        </div>
        {showModal && <DeleteAccountModal closeModal={closeModal} onDeleteAccount={deleteAccount} />}
        {showEditModal && (
          <EditProfileModal
            closeModal={closeEditModal}
            userDetails={userDetails}
            onUpdate={reloadUserData}
          />
        )}
      </div>
    </div>
  );
};

export default Profile;
