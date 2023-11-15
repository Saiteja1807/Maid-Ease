import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import Navbar from './Navbar';

const MakeAppointment = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const payload = location.state?.bookingPayload; 
  console.log(payload);

  const [startDate, setStartDate] = useState('');
  const [startTime, setStartTime] = useState('');

  const handleConfirm = () => {
    const appointmentDetails = {
      UserId: payload.UserId,
      ServiceProviderId1: payload.ServiceProviderId,
      ServiceProviderId2: null,
      ServiceProviderId3: null,
      NetAmount: payload.DiscountedPrice,
      Tax: ((payload.DiscountedPrice / 100) * 3.5).toFixed(2),
      Discount: 10,
      TotalPrice: ((payload.DiscountedPrice + ((payload.DiscountedPrice / 100) * 3.5)) - 10).toFixed(2),
      BookingStartDate: startDate,
      BookingEndDate: new Date(),  // This may need adjustment based on your logic
      SlotTime: startTime,
      IsActive: true,
      CreatedBy: "System",
      UpdatedBy: ""
    };

    axios
      .post('http://localhost:4000/bookingdetails', appointmentDetails)
      .then((response) => {
        if (response.status === 200) {
          navigate('/booking-confirmation', { state: { appointmentDetails } });
        } else {
          console.error('Unexpected response status:', response.status);
        }
      })
      .catch((error) => {
        console.error('Error booking service:', error);
      });
  };

  return (
    <>
      <Navbar />
      <div className="content-wrapper">
        <div className='header-container'>
          <h2>Make Appointment</h2>
        </div>
        {payload && (
                    <div className="booking-details-container">
                        <p><strong>Alex Smith - Laundry Service's</strong></p>
                        <p><strong>Net Amount: </strong> ${payload.NetAmount}</p>
                        <p><strong>Tax: </strong> ${payload.Tax}</p>
                        <p><strong>Discount: </strong> ${payload.Discount}</p>
                        <p><strong>Total Price: </strong> ${payload.TotalPrice}</p>
                        <p> <label htmlFor="date"><b>Select Date for Booking:</b></label>&emsp;
                            <input 
                                id="date"
                                type="date" 
                                value={startDate}
                                onChange={(e) => setStartDate(e.target.value)}/>
                        </p>
                        
                        <p> <label htmlFor="time">Select Time for Booking:</label>&emsp;
                            <input 
                                id="time"
                                type="time" 
                                value={startTime}
                                onChange={(e) => setStartTime(e.target.value)}/>
                        </p>
                        <p><br/>
                        <button className="favourite-delete" onClick={handleConfirm}>
                            Confirm Appointment
                        </button>
                        </p>
                    </div>
                )}
      </div>
      <footer className='footer-container'>
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Developed by MaidEase. All rights reserved.
        </p>
      </footer>
    </>
  );
};

export default MakeAppointment;
