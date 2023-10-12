import React from 'react';
import "../index.css";
import Footer from '../components/Footer';
import ServiceCard from '../components/ServiceCard';
import SubNavbar from '../components/SubNavbar';

function ManageServices() {
  return (
    <>
      <SubNavbar/>
      <br /><br /><br />
      <ServiceCard/>
      <ServiceCard/>
      <ServiceCard/>
      <br /><br /><br />
      <Footer/>
    </>
    
  );
}

export default ManageServices;
