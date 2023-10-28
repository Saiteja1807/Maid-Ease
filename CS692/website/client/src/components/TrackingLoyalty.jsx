import React, { useState, useEffect } from 'react';
import axios from 'axios';

function UserHistoryTable() {
    const [data, setData] = useState([]);
    const userId = 1; // You can make this dynamic based on your needs

    useEffect(() => {
        // Fetch user history data from the API when the component mounts
        axios.get(`/userHistory/${userId}`)
            .then(response => {
                setData(response.data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, [userId]);

    return (
        <table>
            <thead>
                <tr>
                    <th>Activity</th>
                    <th>Comments</th>
                    <th>Activity Date</th>
                    <th>Added By</th>
                </tr>
            </thead>
            <tbody>
                {data.map((item, index) => (
                    <tr key={index}>
                        <td>{item.Activity}</td>
                        <td>{item.Comments}</td>
                        <td>{item.ActivityDate}</td>
                        <td>{item.CreatedBy}</td>

                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default UserHistoryTable;
