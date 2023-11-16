import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import Navbar from './Navbar';

const MakeAppointment = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const payload = location.state?.bookingPayload; 

  const formatDateForInput = (date) => {
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

  // Function to format time in HH:MM format for time input
  const formatTimeForInput = (date) => {
    let d = new Date(date),
        hours = '' + d.getHours(),
        minutes = '' + d.getMinutes();

    if (hours.length < 2) 
        hours = '0' + hours;
    if (minutes.length < 2) 
        minutes = '0' + minutes;

    return [hours, minutes].join(':');
  };

  const [startDate, setStartDate] = useState(formatDateForInput(new Date()));
  const [startTime, setStartTime] = useState(formatTimeForInput(new Date()));

  const handleConfirm = (payload) => {
    let start = new Date(startDate);
    let end = new Date(start);
    end.setDate(end.getDate() + 3);

    payload.BookingStartDate = formatDate(start);
    payload.BookingEndDate = formatDate(end);
    payload.SlotTime = formatTime(startTime);
    
    axios
      .post('http://localhost:4000/bookingdetails', payload)
      .then((response) => {
        if (response.status === 200) {
          payload.BookingId = response.data.BookingId;
          alert('Your booking is confirmed.'); 
          navigate('/booking-confirmation', { state: { bookingDetails: payload } });
        } else {
          console.error('Unexpected response status:', response.status);
        }
      })
      .catch((error) => {
        console.error('Error booking service:', error);
      });
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
                       
                    </div>
                )}
                <p><br/>
                        <button className="favourite-delete" onClick={() => handleConfirm(payload)}>
                            Confirm Appointment
                        </button>
                        </p>
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
