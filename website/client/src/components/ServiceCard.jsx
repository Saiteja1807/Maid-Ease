import React, { useState } from 'react';
import axios from 'axios';
import '../css/ServiceCard.css';
import 'font-awesome/css/font-awesome.min.css';

const ServiceCard = ({data}) => {
  const handleAddToFavorites = () => {
    const requestData = {
      UserId: data.UserId, 
      ServiceProviderId: data.ServiceProviderId,
      IsFavourite: true,
    };

    // Make a POST request to your API endpoint
    axios.post('http://localhost:4000/favouritedetails', requestData)
      .then((response) => {
        console.log('Record added to favorites:', response.data);
      })
      .catch((error) => {
        // Handle errors here
        console.error('Error adding to favorites:', error);
      });
  };


  
    return (
        <div className="product-card">
        <div className="badge">Hot</div>
        <div className="product-tumb">
          <img src={data.ImageURL} alt=""/>
        </div>
        <div className="product-details">
          <span className="product-catagory">{data.ServiceType}</span>
          <h4>{data.FirstName}  {data.LastName}</h4>
          <p>{data.Description}</p>
          <p><b>Address: {data.Address1}, {data.City}, {data.State} {data.ZipCode}<br/>
          ContactNo: {data.ContactNo}</b></p>
          <div className="product-bottom-details">
            <div className="product-price">${data.Price}</div>
            <div className="product-links">
              <span><i className="fa fa-heart" onClick={handleAddToFavorites}></i></span> &emsp; 
              <span><i className="fa fa-shopping-cart"></i></span>
            </div>
          </div>
        </div>
      </div>
)};

export default ServiceCard;