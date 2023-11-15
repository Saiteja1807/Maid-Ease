import React from 'react';
import '../css/BookingConfirmation.css';
import Navbar from '../components/Navbar';
import { useLocation } from 'react-router-dom';

function BookingConfirmation() {
    const location = useLocation();
    const bookingDetails = location.state?.bookingDetails;

    return (<>
            <Navbar />
            <div className="content-wrapper">
                <div className='header-container'>
                    <h2>Your Booking Confirmation</h2>
                </div>

                {bookingDetails && (
                    <div className="booking-details-container">
                        <p><strong>Alex Smith - Laundry Service's</strong></p>
                        <p><strong>Booking Start Date: </strong> {new Date(bookingDetails.BookingStartDate).toLocaleDateString()}</p>
                        <p><strong>Booking End Date: </strong> {new Date(bookingDetails.BookingEndDate).toLocaleDateString()}</p>
                        <p><strong>Net Amount: </strong> ${bookingDetails.NetAmount}</p>
                        <p><strong>Tax: </strong> ${bookingDetails.Tax}</p>
                        <p><strong>Discount: </strong> ${bookingDetails.Discount}</p>
                        <p><strong>Total Price: </strong> ${bookingDetails.TotalPrice}</p>
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
