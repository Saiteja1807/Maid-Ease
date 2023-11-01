import React from 'react';
import locationImg from './assets/location.svg';
import emailImg from './assets/email.svg';
import phoneImg from './assets/phone.svg';
import '../css/ContactUs.css';
import Navbar from './Navbar';

function ContactUs() {
    return (
      <>
      <Navbar/><br/><br/>
        <div className="contact-container">
            <div className="header-container">
                <h2>Contact Us</h2>
            </div>
            
            <div className="content-container">
                <div className="map-container">
                    <iframe 
                        className="map"
                        src="https://www.google.com/maps/d/embed?mid=1LPQwSkPyXJsSbfxvmHtroJ86MLCLrUg&ehbc=2E312F" 
                        title="map">
                    </iframe>
                </div>

                <div className="details-container">
                    <h3>Get In Touch With Us</h3>
                    
                    <div className="detail-item">
                        <img className="icon" src={locationImg} alt="Location" />
                        <div className="description">
                            <p>Our Location</p>
                            <p>One Pace Plaza, New York, NY 10038</p>
                        </div>
                    </div>

                    <div className="detail-item">
                        <img className="icon" src={emailImg} alt="Email" />
                        <div className="description">
                            <p>Email</p>
                            <p>inquiry@maidease.com</p>
                        </div>
                    </div>

                    <div className="detail-item">
                        <img className="icon" src={phoneImg} alt="Phone" />
                        <div className="description">
                            <p>Phone Number</p>
                            <p>123-456-7890</p>
                        </div>
                    </div>
                </div>
            </div>
            <br/><br/>
            <div className="header-container">
                <p>&copy; {new Date().getFullYear()} Developed by MaidEase. All rights reserved.</p>
            </div>
        </div>
        </>
    );
}

export default ContactUs;
