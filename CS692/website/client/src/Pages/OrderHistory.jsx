import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import '../css/OrderHistory.css';
import Navbar from '../components/Navbar';

const OrderHistory = () => {
    const [data, setData] = useState([]);
    const { id } = useParams();
    const [selectedOrder, setSelectedOrder] = useState(null);
    
    useEffect(() => {
        axios.get(`http://localhost:4000/orderhistory/${id}`)
            .then(response => {
                setData(response.data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, [id]);

    const handleViewDetails = (order) => {
        setSelectedOrder(order);
    };

    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
        return new Date(dateString).toLocaleDateString(undefined, options);
    };

    return (
        <>
            <Navbar /><br/><br/>
            <div className="header-container">
                <h2>Order History</h2>
            </div>
            <div className="container">
                {data.map(order => (
                    <div key={order.BookingId} className="card">
                        <h3>Booking ID: {order.BookingId}</h3>
                        <p>Booking Start Date: {formatDate(order.BookingStartDate)}</p>
                        <p>Booking End Date: {formatDate(order.BookingEndDate)}</p>
                        <p>NetAmount: ${order.NetAmount}</p>
                        <p>Tax: ${order.Tax}</p>
                        <p>Discount: ${order.Discount}</p>
                        <h4>Total Price: ${order.TotalPrice}</h4>
                        <button className="details-button" onClick={() => handleViewDetails(order)}>View Details</button>
                    </div>
                ))}

                {selectedOrder && (
                    <div className="details-panel">
                        <h2>Details for Booking ID: {selectedOrder.BookingId}</h2><br/>
                        <p>Service 1: <br/>
                        <span>&emsp;&emsp;&emsp;Name: {selectedOrder.SP1FirstName} {selectedOrder.SP1LastName}</span><br/>
                        <span>&emsp;&emsp;&emsp;Service Type: Laundry</span><br/>
                        <span>&emsp;&emsp;&emsp;Address: {selectedOrder.SP1Address1}, {selectedOrder.SP1Address2}, {selectedOrder.SP1City}, New Jersey, {selectedOrder.SP1Country} - {selectedOrder.SP1ZipCode}</span><br/>
                        <span>&emsp;&emsp;&emsp;Email Address: {selectedOrder.SP1EmailId}</span><br/>
                        <span>&emsp;&emsp;&emsp;Contact No: {selectedOrder.SP1ContactNo}</span><br/>
                        </p><br/>
                        <p>Service 2: <br/>
                        <span>&emsp;&emsp;&emsp;Name: {selectedOrder.SP2FirstName} {selectedOrder.SP2LastName}</span><br/>
                        <span>&emsp;&emsp;&emsp;Service Type: House Cleaning</span><br/>
                        <span>&emsp;&emsp;&emsp;Address: {selectedOrder.SP2Address1}, {selectedOrder.SP2Address2}, {selectedOrder.SP2City}, New Jersey, {selectedOrder.SP2Country} - {selectedOrder.SP2ZipCode}</span><br/>
                        <span>&emsp;&emsp;&emsp;Email Address: {selectedOrder.SP2EmailId}</span><br/>
                        <span>&emsp;&emsp;&emsp;Contact No: {selectedOrder.SP2ContactNo}</span><br/>
                        </p><br/>
                        {
                            selectedOrder.SP3UserId ? ( <>
                                <p>Service 3: <br/>
                                <span>&emsp;&emsp;&emsp;Name: {selectedOrder.SP3FirstName} {selectedOrder.SP3LastName}</span><br/>
                                <span>&emsp;&emsp;&emsp;Service Type: PetCare</span><br/>
                                <span>&emsp;&emsp;&emsp;Address: {selectedOrder.SP3Address1}, {selectedOrder.SP3Address2}, {selectedOrder.SP3City}, New Jersey, {selectedOrder.SP3Country} - {selectedOrder.SP3ZipCode}</span><br/>
                                <span>&emsp;&emsp;&emsp;Email Address: {selectedOrder.SP3EmailId}</span><br/>
                                <span>&emsp;&emsp;&emsp;Contact No: {selectedOrder.SP3ContactNo}</span><br/>
                                </p>
                            </>) 
                            :  
                            ( <></>) 
                        }
                        <button className="close-button" onClick={() => setSelectedOrder(null)}>Close</button>
                    </div>
                )}              
            </div>
            <div className="header-container">
            <p className="text-sm text-white">&copy; {new Date().getFullYear()} Developed by MaidEase. All rights reserved.</p>
            </div>
        </>
    );
}

export default OrderHistory;
