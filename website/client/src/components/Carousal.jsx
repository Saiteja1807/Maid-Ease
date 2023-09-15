import React, { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import laundaryImg from './assets/laundary.jpeg';
import cleaningImg from './assets/cleaning.jpeg';
import chefImg from './assets/chef.jpeg';

const Carousel = () => {
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

  return (
<div
      className="relative flex items-center overflow-hidden h-[28rem] mx-4 bg-gray-100 shadow-lg rounded-2xl"
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
            <button className="px-4 py-2 font-semibold text-white bg-[#672ab2] rounded-md hover:bg-blue-700 focus:outline-none">
              Get Offer
            </button>
          </div>
        </div>
      ))}
      {isHovered && (
        <>
          <button
            className="absolute left-0 z-10 p-2 text-white bg-black bg-opacity-50 rounded-r-md hover:bg-opacity-75 focus:outline-none"
            onClick={prevSlide}
          >
            <FaChevronLeft size={24} />
          </button>
          <button
            className="absolute right-0 z-10 p-2 text-white bg-black bg-opacity-50 rounded-l-md hover:bg-opacity-75 focus:outline-none"
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
};

export default Carousel;
