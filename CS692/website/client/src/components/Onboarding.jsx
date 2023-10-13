import React, { useState, useEffect } from 'react';
import slide1Image from './assets/slide1.jpeg'
import slide2Image from './assets/slide2.jpeg';
import slide3Image from './assets/slide3.jpeg';

const slides = [
  {
    title: 'Welcome to Maidease',
    description: 'Your all-in-one home services solution',
    bgColor: 'bg-[#fdfffd]',
    image: slide1Image,
  },
  {
    title: 'Select and Customize Your Service',
    description: ' Choose from cleaning, laundry, or other services. Set preferences, schedule, and budget.',
    bgColor: 'bg-[##fafdfd]',
    image: slide2Image,
  },
  {
    title: 'Enjoy Hassle-Free Service',
    description: 'Sit back and relax while we take care of your home.',
    bgColor: 'bg-[#feffff]',
    image: slide3Image,
  },
];

function Dot({ active }) {
  const baseClass = 'rounded-full mx-1 transition-all duration-300';
  return (
    <div
      className={`${baseClass} ${
        active ? 'w-4 h-4 bg-gray-600' : 'w-2 h-2 bg-gray-400'
      }`}
    ></div>
  );
}

function Onboarding() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className={`relative flex flex-1 flex-col items-center justify-center ${slides[currentSlide].bgColor} p-8`}>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <img
          src={slides[currentSlide].image}
          alt={slides[currentSlide].title}
          className="w-96 h-96 object-cover object-center mb-4 rounded-lg"
        />
        
        <div className="text-center">
        <h2 className="text-xl font-bold">{slides[currentSlide].title}</h2>
        <p className="text-base">{slides[currentSlide].description}</p>
      </div>
      </div>
      <div className="absolute bottom-8 w-full flex justify-center space-x-2">
        {slides.map((_, index) => (
          <Dot key={index} active={index === currentSlide} />
        ))}
      </div>
    </div>
  );
}

export default Onboarding;
