import React, { useState, useEffect } from 'react';
import DeleteAccountModal from '../components/DeleteAccount';
import EditProfileModal from '../components/EditProfileModal';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../css/Profile.css';  
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

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

  const trackingLoyalty = () => {
    navigate('/trackingLoyalty');
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
    <>
      <Navbar /><br /><br />
      <div className="bg-[#672ab2]">
        <div className="container mx-auto text-center py-3">
          <h2 className="text-white">Profile</h2>
        </div>
      </div>
      <div className='profile-bg container mx-auto mt-0 py-6 px-4 min-h-screen'>
          <div className="flex justify-between items-center mb-8">
              <div>
                  <h2 className="profile-subtitle">{userDetails.FirstName} {userDetails.LastName}</h2>
              </div>
              <button
                  className="edit-button"
                  onClick={openEditModal}
              >
                  Edit
              </button>
          </div>
          <table className="tracking-table">  {/* Update table class */}
              <thead className="tracking-thead"> {/* Add thead with the class */}
                <tr>
                  <th>Details</th>  {/* This is a placeholder; modify as per your structure */}
                  <th>Value</th>
                </tr>
              </thead>
              <tbody className="tracking-tbody">
                  {filteredUserDetails.map(([key, value]) => (
                      <tr key={key}>
                          <td className="tracking-td">{key.charAt(0).toUpperCase() + key.slice(1)}</td>
                          <td className="tracking-td">{value}</td>
                      </tr>
                  ))}
              </tbody>
          </table>
          <div className="flex justify-between mt-8">
              <button
                  onClick={openModal}
                  className="action-button delete-button"
              >
                  Delete Account
              </button>
              <button
                  onClick={trackingLoyalty}
                  className="action-button"
              >
                  Track Loyality 
              </button>
              <button
                  onClick={goBack}
                  className="action-button"
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
      <Footer/>
      </>
  );
};

export default Profile;
