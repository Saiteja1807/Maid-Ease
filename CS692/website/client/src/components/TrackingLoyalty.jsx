import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../css/TrackingLoyalty.css';
import Navbar from './Navbar';
import Footer from './Footer';

function TrackingLoyalty() {
    const [data, setData] = useState([]);
    const userId = 1;

    useEffect(() => {
        axios.get(`http://localhost:4000/userHistory/${userId}`)
            .then(response => {
                setData(response.data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, [userId]);

    return (
        <>
            <Navbar />
            <br /><br />
            <div className='header-container'>
                <h2>Tracking Loyalty</h2>
            </div>
            <div className="table-container">
                <table className="tracking-table">
                    <thead className="tracking-thead">
                        <tr>
                            <th>Activity</th>
                            <th>Comments</th>
                            <th>Activity Date</th>
                            <th>Added By</th>
                        </tr>
                    </thead>
                    <tbody className="tracking-tbody">
                        {data.map((item, index) => (
                            <tr key={index}>
                                <td className="tracking-td">{item.Activity}</td>
                                <td className="tracking-td">{item.Comments}</td>
                                <td className="tracking-td">{item.ActivityDate}</td>
                                <td className="tracking-td">{item.CreatedBy}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <br /><br />
            <div className='header-container'>
                <p className="text-sm text-white">&copy; {new Date().getFullYear()} Developed by MaidEase. All rights reserved.</p>
            </div>
        </>
    );
}

export default TrackingLoyalty;
