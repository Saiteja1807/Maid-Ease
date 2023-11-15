import React, { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight, FaStar, FaLocationArrow, FaEnvelope, FaPhone } from 'react-icons/fa';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';
import service2Img from '../components/assets/service2.jpeg';
import laundaryImg from '../components/assets/laundary.jpeg';
import cleaningImg from '../components/assets/cleaning.jpeg';
import chefImg from '../components/assets/chef.jpeg';
import locationImg from '../components/assets/location.svg';
import emailImg from '../components/assets/email.svg';
import phoneImg from '../components/assets/phone.svg';
import '../css/HomePage.css';

function Home() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isHovered, setIsHovered] = useState(false);

    const slides = [
        {
          id: 1,
          image: laundaryImg,
          description:
            "Get 40% off on all our laundry services -<br />experience premium washing, drying, and folding at an unbeatable price!",
        },
        {
          id: 2,
          image: cleaningImg,
          description:
            "Save 30% on our top-notch cleaning services!<br />Let our professional team make your home sparkle and shine!",
        },
        {
          id: 3,
          image: chefImg,
          description:
            "Enjoy a 20% discount on our personal chef services -<br />indulge in exquisite culinary delights tailored just for you!",
        },
      ];
    
      
    
     
      const services = [
        {
          id: 1,
          title: 'HouseKeeping',
          image: '/images/Housekeeping2.jpg',
          rating: 4.5,
          price: '$100',
        },
        {
          id: 2,
          title: 'ChildCare',
          image: '/images/ChildCare1.jpg',
          rating: 4.7,
          price: '$150',
        },
        {
          id: 3,
          title: 'Laundry',
          image: '/images/laundry4.jpeg',
          rating: 4.3,
          price: '$120',
        },
        {
          id: 4,
          title: 'PetCare',
          image: '/images/PetCare3.jpeg' ,
          rating: 4.2,
          price: '$100',
        },
        {
          id: 5,
          title: 'SeniorCare',
          image: '/images/SeniorCare2.jpg ',
          rating: 4.9,
          price: '$175',
        },
        {
          id: 6,
          title: 'Tutoring',
          image: service2Img,
          rating: 4.9,
          price: '$175',
        }
      ];


    return (
        <div className='bg-[#f2f2f2]'>
            <Navbar />

            <CarouselSection slides={slides} isHovered={isHovered} setIsHovered={setIsHovered} currentSlide={currentSlide} setCurrentSlide={setCurrentSlide} />

            <ServicesSection services={services} />

            <ContactSection />

            <Footer />
        </div>
    );
}


function CarouselSection({ slides, isHovered, setIsHovered, currentSlide, setCurrentSlide }) {
    useEffect(() => {
        const autoScroll = setInterval(() => {
          if (!isHovered) {
            nextSlide();
          }
        }, 10000);
    
        return () => {
          clearInterval(autoScroll);
        };
      }, [isHovered]);


    const Dot = ({ index, active }) => (
        <button
          className={`w-2 h-2 mr-2 rounded-full transition-all duration-300 focus:outline-none ${
            active ? 'bg-purple-600 w-4 h-4' : 'bg-gray-400'
          }`}
          onClick={() => setCurrentSlide(index)}
        ></button>
      );
      
      const prevSlide = () => {
        setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
      };
    
      const nextSlide = () => {
        setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
      };

    return (
        <div
      className="relative flex items-center overflow-hidden h-[28rem] mx-4 bg-gray-100 shadow-lg rounded-2xl transition-shadow hover:shadow-xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <style>
        {`
          .carousel-image {
            max-width: 100%;
            max-height: 100%;
            object-fit: contain;
          }
          .multiline-description {
            display: inline;
            white-space: pre-wrap;
          }
        `}
      </style>
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute top-0 w-full h-full flex justify-end items-center transition-transform duration-500 ease-in-out ${
            index === currentSlide ? '' : index < currentSlide ? '-translate-x-full' : 'translate-x-full'
          }`}
          style={{ backgroundColor: '#fdfffd' }}
        >
          <img src={slide.image} alt={`Slide ${slide.id}`} className="carousel-image mr-32" />
          <div
            className={`absolute left-0 mt-6 ml-16 space-y-3 text-purple-600 ${index === currentSlide ? "opacity-100" : "opacity-0"}`}
          >
            <div className="text-2xl font-bold">
              <span
                className="multiline-description"
                dangerouslySetInnerHTML={{ __html: slide.description }}
              />
            </div>
            <button className="px-4 py-2 font-semibold text-white bg-[#672ab2] rounded-md hover:bg-blue-700 focus:outline-none transform transition-transform hover:scale-105">
              Get Offer
            </button>
          </div>
        </div>
      ))}
      {isHovered && (
        <>
          <button
            className="absolute left-0 z-10 p-2 text-white bg-black bg-opacity-50 rounded-r-md hover:bg-opacity-75 focus:outline-none transform transition-transform hover:scale-110"
            onClick={prevSlide}
          >
            <FaChevronLeft size={24} />
          </button>
          <button
            className="absolute right-0 z-10 p-2 text-white bg-black bg-opacity-50 rounded-l-md hover:bg-opacity-75 focus:outline-none transform transition-transform hover:scale-110"
            onClick={nextSlide}
          >
            <FaChevronRight size={24} />
          </button>
        </>
      )}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex items-center justify-center space-x-3">
        {slides.map((_, index) => (
          <Dot key={index} index={index} active={index === currentSlide} />
        ))}
      </div>
    </div>
    );
}

function ServicesSection({ services }) {
    return (
        <div className="mx-4 my-6">
            <h2 className="text-3xl font-semibold text-center mb-6">Our Premium Services</h2>
            <div className="grid grid-cols-3 gap-6">
                {services.map(service => (
                    <ServiceCard service={service} key={service.id} />
                ))}
            </div>
        </div>
    );
}

function ServiceCard({ service }) {
    return (
        <Link to="/in-progress">
            <div className="flex flex-col bg-gradient-to-br from-purple-200 to-blue-200 p-4 border rounded-lg shadow-lg transform transition-transform duration-200 hover:scale-105 hover:shadow-xl">
                <img src={service.image} alt={service.title} className="w-full h-48 object-cover mb-4 rounded-lg" />
                <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                <div className="flex justify-between items-center mt-auto">
                    <Rating rating={service.rating} />
                    <span className="text-xl font-semibold text-purple-600">{service.price}</span>
                </div>
            </div>
        </Link>
    );
}

function Rating({ rating }) {
    return (
        <div className="flex items-center space-x-2">
            <FaStar className="text-yellow-500" />
            <span className="text-yellow-500 font-medium">{rating}</span>
        </div>
    );
}

function ContactSection() {
    return (
        <div className="contact-section">
            <Map />
            <div className="details-container">
                <h3>Get In Touch With Us</h3>
                <ContactDetail icon={<FaLocationArrow />} title="Our Location" description="One Pace Plaza, New York, NY 10038" />
                <ContactDetail icon={<FaEnvelope />} title="Email" description="inquiry@maidease.com" />
                <ContactDetail icon={<FaPhone />} title="Phone Number" description="123-456-7890" />
            </div>
        </div>
    );
}


function Map() {
    return (
        <div className="map-container">
            <iframe className="map" src="https://www.google.com/maps/d/embed?mid=1LPQwSkPyXJsSbfxvmHtroJ86MLCLrUg&ehbc=2E312F" title="map"></iframe>
        </div>
    );
}

function ContactDetail({ icon, title, description }) {
    return (
        <div className="detail-item">
            <div className="icon">{icon}</div>
            <div className="description">
                <p>{title}</p>
                <p>{description}</p>
            </div>
        </div>
    );
}

function Footer() {
    return (
        <div className='header-container'>
            <p className="text-sm text-white">&copy; {new Date().getFullYear()} Developed by MaidEase. All rights reserved.</p>
        </div>
    );
}

export default Home;
