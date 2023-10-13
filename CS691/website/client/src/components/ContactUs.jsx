import React from 'react';
import locationImg from './assets/location.svg';
import emailImg from './assets/email.svg';
import phoneImg from './assets/phone.svg';

function Contact() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">Contact Us</h1>
      <div className="flex flex-wrap justify-center">
        <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8 lg:mb-0">
          <iframe className="w-full h-96 rounded-lg" src="https://www.google.com/maps/d/embed?mid=1LPQwSkPyXJsSbfxvmHtroJ86MLCLrUg&ehbc=2E312F" title="map"></iframe>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/3 px-4">
          <h2 className="text-2xl font-semibold mb-6">Get In Touch With Us</h2>
          <div className="space-y-6">
            {/* Location */}
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <img className="h-6 w-6" src={locationImg} alt="house icon"></img>
              </div>
              <div className="ml-4">
                <div className="font-semibold">Our Location</div>
                <div className="text-gray-600">One Pace Plaza,<br/> New York, NY 10038</div>
              </div>
            </div>
            {/* Email */}
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <img className="h-6 w-6" src={emailImg} alt="envelope icon"></img>
              </div>
              <div className="ml-4">
                <div className="font-semibold">Email</div>
                <div className="text-gray-600">inquiry@maidease.com</div>
              </div>
            </div>
            {/* number */}
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <img className="h-6 w-6" src={phoneImg} alt="phone icon"></img>
              </div>
              <div className="ml-4">
                <div className="font-semibold">Phone Number</div>
                <div className="text-gray-600">123-456-7890</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
