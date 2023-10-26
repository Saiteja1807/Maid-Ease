import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "../index.css";
import Footer from '../components/Footer';
import ServiceCard from '../components/ServiceCard';
import ServiceNavbar from '../components/ServiceNavbar';

const ManageServices = () => {
  const [apiData, setData] = useState(null);
  
  useEffect(() => {
    axios.get('http://localhost:4000/serviceproviders') 
      .then(response => setData(response.data))
      .catch(error => console.error('Error:', error));
  }, []);

  return (
    <>
      <ServiceNavbar/><br /><br />
      <div className=" bg-[#672ab2]">
        <div className=" subheader container mx-auto text-center py-3">
          <p className="text-sm text-white"><h2>HouseHold Services</h2></p>
        </div>
      </div>

      {
        apiData && apiData.map(item => ( // Added a check for apiData
          <ServiceCard key={item.id} data={item}/>
        ))
      }
      <br /><br /><br />
      <Footer/>
    </>   
  );
}

export default ManageServices;
