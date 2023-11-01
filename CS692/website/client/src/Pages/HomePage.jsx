import React from 'react';
import Navbar from '../components/Navbar';
import Carousel from '../components/Carousal';
import ServiceCards from '../components/Services';
import Footer from '../components/Footer';
import Contact from '../components/ContactUs';

function Home() {
    return (
        <div className='bg-[#f2f2f2]'>
            <Navbar />
            <Carousel />
            <ServiceCards />
            <Contact />
            <div className='header-container'>
                <p className="text-sm text-white">&copy; {new Date().getFullYear()} Developed by MaidEase. All rights reserved.</p>
            </div>
        </div>
    );
}

export default Home;
