import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../css/ServiceCardDetails.css';
import { useParams } from 'react-router-dom';
import LoaderSpinner from './LoaderSpinner';
import Navbar from './Navbar';
import Footer from './Footer';
import { GoogleMap, LoadScript } from "@react-google-maps/api";
import { useNavigate } from 'react-router-dom';

const ServiceCardDetails = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [serviceDetails, setServiceDetails] = useState({});
    const [loading, setLoading] = useState(true);
    const [mapCoordinates, setMapCoordinates] = useState({ lat: 0, lng: 0 });
    const [ratingsData, setRatingsData] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:4000/services/${id}`)
            .then((response) => {
                setServiceDetails(response.data[0]);
                setLoading(false);
                loadMap(response.data[0]);
            })
            .catch((error) => {
                console.error('Error fetching service details:', error);
            });

        axios.get(`http://localhost:4000/ratings/${id}`)
            .then((response) => {
                setRatingsData(response.data);
            })
            .catch((error) => {
                console.error('Error fetching ratings:', error);
            });        
    }, [id]);

    const loadMap = (serviceData) => {
        if (serviceData.Address1) {
            // Convert address to coordinates using Geocoding API
            axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${serviceData.Address1},+${serviceData.City},+${serviceData.State}&key=AIzaSyCMdWCF6KJyX3kTYqRYcfB_pJQkNqRroQU`)
                .then(response => {
                    if (response.data.results && response.data.results[0] && response.data.results[0].geometry) {
                        setMapCoordinates(response.data.results[0].geometry.location);
                    }
                }).catch(error => {
                    console.error('Error converting address to coordinates:', error);
                });
        }
    };

    const handleAddToFavorites = () => {
        const requestData = {
          UserId: 1, 
          ServiceProviderId: serviceDetails.ServiceProviderId,
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

    if (loading) {
        return <LoaderSpinner />;
    } else {
        return (
            <div>
                <Navbar /><br /><br />
                <div className='header-container'>
                        <h2>{serviceDetails.FirstName} {serviceDetails.LastName} - {serviceDetails.ServiceType} Service's</h2>
                    </div>
                <section className="service-details">
                    <div className="service-details-container">
                        <img src={serviceDetails.ImageURL} alt={`${serviceDetails.FirstName} ${serviceDetails.LastName}`} />
                        <h2>{serviceDetails.FirstName} {serviceDetails.LastName}</h2>
                        <div>{serviceDetails.ServiceType} &emsp;| &emsp; {serviceDetails.Ratings}<i className="fa fa-star ratings-yellow-star" aria-hidden="true"></i></div>
                        <div>{serviceDetails.Description}</div>
                        <div><b>Address:</b> {serviceDetails.Address1}, {serviceDetails.City}, {serviceDetails.State} {serviceDetails.ZipCode}</div>
                        <div><b>Contact No:</b> +1 {serviceDetails.ContactNo}</div>
                        <div><b>Email Address:</b> {serviceDetails.Email}</div>
                        <div><b>Price:</b> <span style={{textDecoration: 'line-through'}}>${serviceDetails.OriginalPrice}</span> &nbsp;${serviceDetails.DiscountedPrice}</div>

                        <div className="product-links">
                            <span><button className='favourite-delete' onClick={handleAddToFavorites}>Add Favorites</button></span> &emsp; 
                            <span><button className='favourite-delete'>Add to Cart</button></span>
                        </div>
                    </div>
               
                    <div className="ratings-reviews-container">
                        <h3>Ratings & Reviews:</h3>
                            {ratingsData !== null && ratingsData.length > 0 ? (
                                ratingsData.map((rating) => (
                                <div key={rating.RatingsId} className="rating-item">
                                    <h4>{rating.FirstName} {rating.LastName}</h4>
                                    <p>{rating.Ratings}<i className="fa fa-star ratings-yellow-star" aria-hidden="true"></i></p>
                                    <p>{rating.Comments}</p>
                                    <small>Reviewed on {new Date(rating.ReviewGivenDate).toLocaleDateString()}</small>
                                </div>
                            ))
                        ) : (
                            <div className="rating-item"> Oops No Ratings Found!! </div>
                            )}
                        </div>
                                       
                </section>
               <div className='header-container'>
               <p className="text-sm text-white">&copy; {new Date().getFullYear()} Developed by MaidEase. All rights reserved.</p>
               </div>
            </div>
        );
    }
}

export default ServiceCardDetails;
