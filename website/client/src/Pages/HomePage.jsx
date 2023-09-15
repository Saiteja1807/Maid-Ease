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
            <Footer />
        </div>
    );
}

export default Home;
