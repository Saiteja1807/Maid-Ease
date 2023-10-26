import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../css/ServiceCard.css';
import 'font-awesome/css/font-awesome.min.css';
import { useNavigate } from 'react-router-dom';
import LoaderSpinner from '../components/LoaderSpinner';

const FavoriteCards = ({data, onRemove}) => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);

    const handleRemove = () => {
        // Make a DELETE request to remove the favorite
        axios
          .delete(`http://localhost:4000/favouritedetails/${data.FavouriteId}`)
          .then((response) => {
            setLoading((loading) => !loading);
            if (response.status === 204) {
              // Removal was successful
              alert('Removed from Favourites.');
              navigate('/favourites');
              onRemove(data.FavouriteId); 
            } else {
              console.error('Unexpected response status:', response.status);
            }
          })
          .catch((error) => {
            console.error('Error removing favorite:', error);
          });
      };
      useEffect(() => {
      const loadData = async () => { 
        // Wait for two second
        await new Promise((r) => setTimeout(r, 1000));
        // Toggle loading state
        setLoading((loading) => !loading);
    };
    loadData();
  }, []);
  if(!loading){
    return <LoaderSpinner/>;
  }
  else
  {  
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
            <div className="product-price">${data.Price}</div>
            <div className="product-links">
            <span><button className='favourite-delete' onClick={handleRemove}>Remove</button></span> &emsp; 
              <span><button className='favourite-delete'>Add to Cart</button></span>
            </div>
          </div>
        </div>
      </div>
)};
    }
export default FavoriteCards;