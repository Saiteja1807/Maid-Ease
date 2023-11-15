import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import Navbar from './Navbar';

const MakeAppointment = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const payload = location.state?.bookingPayload; 

  const [startDate, setStartDate] = useState('');
  const [startTime, setStartTime] = useState('');

  const handleConfirm = (payload) => {
    let start = new Date(startDate);
    let end = new Date(start);
    end.setDate(end.getDate() + 3);
    
    payload.BookingStartDate = formatDate(start);
    payload.BookingEndDate = formatDate(end);
    payload.SlotTime = formatTime(startTime);
    
    console.log(payload)

  };

  const formatDate = (date) => {
    let d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();
  
    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;
  
    return [month, day, year].join('/');
  };
  
  const formatTime = (time) => {
    let [hours, minutes] = time.split(':');
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12;
    minutes = minutes < 10 ? '0'+minutes : minutes;
  
    return `${hours}:${minutes} ${ampm}`;
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
                        <button className="favourite-delete" onClick={handleConfirm(payload)}>
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
