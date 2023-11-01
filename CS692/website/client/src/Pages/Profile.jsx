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

    useEffect(() => {
        reloadUserData();
    }, []);

    const fetchUserData = async () => {
        try {
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

    const reloadUserData = async () => {
        fetchUserData();
    };

    const deleteAccount = async () => {
        try {
            await axios.delete('http://localhost:4000/user/profile', {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('authToken')}`
                }
            });
            localStorage.removeItem('authToken');
            navigate('/');
            window.location.reload();
        } catch (error) {
            console.error('Error deleting user account:', error);
        }
    };

    const navigate = useNavigate();
    const filteredUserDetails = Object.entries(userDetails).filter(([key]) => !['_id', 'password', '__v'].includes(key));

    return (
        <>
            <Navbar /><br/><br/>
            <div className="header-container">
                <h2>Profile</h2>
            </div>
            <div className='profile-bg container mx-auto mt-0 py-6 px-4 min-h-screen'>
                <div className="flex justify-between items-center mb-8">
                    <h2 className="profile-subtitle">{userDetails.FirstName} {userDetails.LastName}</h2>
                    <button className="edit-button" onClick={() => setShowEditModal(true)}>Edit</button>
                </div>
                <table className="tracking-table">
                    <thead className="tracking-thead">
                        <tr>
                            <th>Details</th>
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
                    <button onClick={() => setShowModal(true)} className="action-button delete-button">Delete Account</button>
                    <button onClick={() => navigate('/trackingLoyalty')} className="action-button">Track Loyality</button>
                    <button onClick={() => navigate('/')} className="action-button">Back</button>
                </div>
                {showModal && <DeleteAccountModal closeModal={() => setShowModal(false)} onDeleteAccount={deleteAccount} />}
                {showEditModal && (
                    <EditProfileModal
                        closeModal={() => setShowEditModal(false)}
                        userDetails={userDetails}
                        onUpdate={reloadUserData}
                    />
                )}
            </div>
            <div className='header-container'>
                <p className="text-sm">&copy; {new Date().getFullYear()} Developed by MaidEase. All rights reserved.</p>
            </div>
        </>
    );
};

export default Profile;
