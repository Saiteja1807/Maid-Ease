import React from 'react';
import '../css/BookingConfirmation.css';
import Navbar from '../components/Navbar';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';

function BookingConfirmation() {
    const navigate = useNavigate();
    const location = useLocation();
    const bookingDetails = location.state?.bookingDetails;
    const bookingId = bookingDetails.BookingId;
    console.log(bookingDetails);

    const handleCancelAppointment = () => {
        axios.delete(`http://localhost:4000/bookingdetails/${bookingId}`)
        .then(response => {
            if (response.status === 204) {
                  alert('Your Appointment is Cancelled');
                navigate('/add-to-cart/1');
              } else {
                console.error('Unexpected response status:', response.status);
              }
        })
        .catch(error => {
            // Handle any errors here
            console.error("Error cancelling the appointment:", error);
        });
    };

    const handleModifyAppointment = () => {
        navigate('/make-appointment', { state: { bookingPayload: bookingDetails } });
    };

    const handleSendReminder = async () => {
        alert('Reminder Email sent successfully.')
       // try {
       //     const response = await axios.post('http://localhost:4000/send-reminder', { bookingDetails });
       //     console.log('Reminder sent dattatata');
       // } catch (error) {
        //    console.error('Error sending reminder:', error);
        //
        //}
    };

    return (<>
            <Navbar />
            <div className="content-wrapper">
                <div className='header-container'>
                    <h2>Your Booking Confirmation</h2>
                </div>

                {bookingDetails && (
                    <div className="booking-details-container">
                        <p><strong>Alex Smith - Laundry Service's</strong></p>
                        <p><strong>Slot Time: </strong> {bookingDetails.SlotTime}</p>
                        <p><strong>Booking Start Date: </strong> {new Date(bookingDetails.BookingStartDate).toLocaleDateString()}</p>
                        <p><strong>Booking End Date: </strong> {new Date(bookingDetails.BookingEndDate).toLocaleDateString()}</p>
                        <p><strong>Net Amount: </strong> ${bookingDetails.NetAmount}</p>
                        <p><strong>Tax: </strong> ${bookingDetails.Tax}</p>
                        <p><strong>Discount: </strong> ${bookingDetails.Discount}</p>
                        <p><strong>Total Price: </strong> ${bookingDetails.TotalPrice}</p>
                        <div className="booking-buttons">
                            <button onClick={handleCancelAppointment} className="favourite-delete">Cancel Appointment</button>
                            <button onClick={handleModifyAppointment} className="favourite-delete">Modify Appointment</button>
                            <button onClick={handleSendReminder} className="favourite-delete">Send Reminder</button>
                        </div>
                    </div>
                )}
            </div>
            <footer className='header-container'>
                <p className="text-sm text-white">&copy; {new Date().getFullYear()} Developed by MaidEase. All rights reserved.</p>
            </footer>
        </>
    );
}

export default BookingConfirmation;
