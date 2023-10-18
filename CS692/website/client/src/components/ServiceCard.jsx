import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../css/ServiceCard.css';
import 'font-awesome/css/font-awesome.min.css';
import { useNavigate } from 'react-router-dom';

const ServiceCard = ({data}) => {
  const [userId, setUserId] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    // Retrieve the JWT token from the cookie
    const token = document.cookie.split('; ').find(row => row.startsWith('jwt='))?.split('=')[1];

    if (token) {
      // Decode the token to access its payload
      const decodedToken = JSON.parse(atob(token.split('.')[1]));

      if (decodedToken) {
        // Extract the 'id' from the token's payload
        const { id } = decodedToken;
        setUserId(id);
      }
    }
  }, []);

  const handleAddToFavorites = () => {
    const requestData = {
      UserId: 1, 
      ServiceProviderId: data.ServiceProviderId,
      IsFavourite: true,
    };

    // Make a POST request to your API endpoint
    axios.post('http://localhost:4000/favouritedetails', requestData)
      .then((response) => {
        console.log('Record added to favorites:', response.data);
        if (response.status === 200) { // If registration is successful
          alert('Added to Favourites.');
          setTimeout(() => {
            navigate('/favourites');
          }, 10000);
        }
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
            <div className="product-price" style={{textDecoration: 'line-through'}}>${data.Price}</div>
            
            <div className="product-links">
              <span><i className="fa fa-heart" onClick={handleAddToFavorites}></i></span> &emsp; 
              <span><i className="fa fa-shopping-cart"></i></span>
            </div>
            
          </div>
          <div className="product-price">${Math.floor(data.Price-20)}</div>
        </div>
      </div>
)};

export default ServiceCard;