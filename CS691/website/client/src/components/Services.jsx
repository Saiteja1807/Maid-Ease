import React from 'react';
import { Link } from 'react-router-dom';
import service1Img from './assets/service1.jpeg';
import service2Img from './assets/service2.jpeg';
import service3Img from './assets/service3.jpeg';

const ServiceCards = () => {
  const services = [
    {
      id: 1,
      title: 'Ironing',
      image: service1Img,
      rating: 4.5,
      price: '$100',
      route: '/ironing',
    },
    {
      id: 2,
      title: 'Home Tutoring',
      image: service2Img,
      rating: 4.7,
      price: '$150',
      route: '/home-tutoring',
    },
    {
      id: 3,
      title: 'Cleaning',
      image: service3Img,
      rating: 4.3,
      price: '$120',
      route: '/cleaning',
    },
  ];

  return (
    <div className="mx-4 my-6">
      <h2 className="text-2xl text-center mb-6">Services</h2>
      <div className="grid grid-cols-3 gap-6">
        {services.map((service) => (
          <Link to = "/in-progress" key={service.id}>
            <div
              className="border rounded-lg overflow-hidden transform transition-transform duration-200 hover:scale-105 hover:shadow-lg"
            >
              <img src={service.image} alt={service.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-2xl font-semibold mb-2">{service.title}</h3>
                <div className="flex justify-between items-center">
                  <div>
                    <span className="text-yellow-500">★ {service.rating}</span>
                  </div>
                  <div>
                    <span className="text-xl font-semibold">{service.price}</span>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ServiceCards;
