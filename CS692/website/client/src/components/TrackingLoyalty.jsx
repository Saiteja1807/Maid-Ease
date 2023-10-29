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
        <div className="app-container">
            <Navbar /><br /><br />
            <div className="content-wrapper">
                <div className="bg-[#672ab2]">
                    <div className="container mx-auto text-center py-3">
                        <h2 className="text-sm text-white">Track Loyalty</h2>
                    </div>
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
            </div>
            <Footer />
        </div>
    );
}

export default TrackingLoyalty;
