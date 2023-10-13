import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../css/ServiceCard.css';
import 'font-awesome/css/font-awesome.min.css';
import { useNavigate } from 'react-router-dom';

const FavoriteCards = ({data, onRemove}) => {
    const navigate = useNavigate();

    const handleRemove = () => {
        // Make a DELETE request to remove the favorite
        axios
          .delete(`http://localhost:4000/favouritedetails/${data.FavouriteId}`)
          .then((response) => {
            if (response.status === 204) {
              // Removal was successful
              alert('Removed from Favourites.');
              onRemove(data.FavouriteId); 
              /*setTimeout(() => {
                navigate('/favourites');
              }, 5000);*/
            } else {
              console.error('Unexpected response status:', response.status);
            }
          })
          .catch((error) => {
            console.error('Error removing favorite:', error);
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
            <span><button className='favourite-delete' onClick={handleRemove}>Remove</button></span> &emsp; 
              <span><i className="fa fa-shopping-cart"></i></span>
            </div>
          </div>
        </div>
      </div>
)};

export default FavoriteCards;