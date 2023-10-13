import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "../index.css";
import Footer from '../components/Footer';
import ServiceCard from '../components/ServiceCard';
import SubNavbar from '../components/SubNavbar';

const ManageServices = () => {
  const [apiData, setData] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:4000/serviceproviders') 
      .then(response => setData(response.data))
      .catch(error => console.error('Error:', error));
  }, []);

  return (
    <>
      <SubNavbar/>
      <br /><br /><br />
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
