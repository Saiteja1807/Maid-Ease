import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../css/ServiceCard.css';
import 'font-awesome/css/font-awesome.min.css';
import { useNavigate } from 'react-router-dom';
import LoaderSpinner from './LoaderSpinner';

const ServiceCard = ({data}) => {
  const [userId, setUserId] = useState(null);
  const navigate = useNavigate();
  
  const [loading, setLoading] = useState(true);

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

    const loadData = async () => { 
      // Wait for two second
      await new Promise((r) => setTimeout(r, 10000));
      // Toggle loading state
      setLoading((loading) => !loading);
  };
  loadData();
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
        setLoading((loading) => !loading);
        if (response.status === 200) { // If registration is successful
          alert('Added to Favourites.');
            navigate('/favourites');
        }
      })
      .catch((error) => {
        // Handle errors here
        console.error('Error adding to favorites:', error);
      });
  };
  
  if(!loading){
    return <LoaderSpinner/>;
  }
else{
    return (
        <div className="product-card">
        <div className="badge">Hot</div>
        <div className="product-tumb">
          <img src={data.ImageURL} alt=""/>
        </div>
        <div className="product-details">
          <span className="product-catagory">{data.ServiceType}</span>
          <h4>{data.FirstName}  {data.LastName}</h4>
          <span class="ratings-yellow-star"><b>{data.Ratings}</b> <i class="fa fa-star ratings-yellow-star" aria-hidden="true"></i></span>
          <p>{data.Description}</p>
          <p><b>Address: {data.Address1}, {data.City}, {data.State} {data.ZipCode}<br/>
          ContactNo: {data.ContactNo}</b></p>
          <div className="product-bottom-details">
            <div className="product-price" style={{textDecoration: 'line-through'}}>${data.Price}</div>
            
            <div className="product-links">
              <span><button className='favourite-delete' onClick={handleAddToFavorites}>Add Favorites</button></span> &emsp; 
              <span><button className='favourite-delete'>Add to Cart</button></span>
            </div>
            
          </div>
          <div className="product-price">${Math.floor(data.Price-20)}</div>
        </div>
      </div>
)};
    }
export default ServiceCard;