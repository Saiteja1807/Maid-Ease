import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../css/ServiceCardDetails.css';
import { useParams } from 'react-router-dom';
import LoaderSpinner from './LoaderSpinner';
import Navbar from './Navbar';
import Footer from './Footer';
import { GoogleMap, LoadScript } from "@react-google-maps/api";

const ServiceCardDetails = () => {
    const { id } = useParams();
    const [serviceDetails, setServiceDetails] = useState({});
    const [loading, setLoading] = useState(true);
    const [mapCoordinates, setMapCoordinates] = useState({ lat: 0, lng: 0 });

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

    if (loading) {
        return <LoaderSpinner/>;
    }
    else
    {
    return (
        <div>
            <Navbar /><br /><br />
            <div className="bg-[#672ab2]">
                <div className="container mx-auto text-center py-3">
                    <h2 className="text-sm text-white">{serviceDetails.FirstName} {serviceDetails.LastName} - {serviceDetails.ServiceType} Service's</h2>
                </div>
            </div>
            <section className="service-details">
                <div className="service-details-container">
                    <img src={serviceDetails.ImageURL} alt={`${serviceDetails.FirstName} ${serviceDetails.LastName}`} />
                    <h2>{serviceDetails.FirstName} {serviceDetails.LastName}</h2>
                    <div>{serviceDetails.ServiceType} &emsp;| &emsp; {serviceDetails.Ratings}<i className="fa fa-star ratings-yellow-star" aria-hidden="true"></i></div>
                    <div>{serviceDetails.Description}</div>
                    <div><b>Address:</b> {serviceDetails.Address1}, {serviceDetails.City}, {serviceDetails.State} {serviceDetails.ZipCode}</div>
                    <div className="map-container">
            </div>
                    <div><b>Contact No:</b> +1 {serviceDetails.ContactNo}</div>
                    <div><b>Email Address:</b> {serviceDetails.Email}</div>
                    <div><b>Price:</b> <span  style={{textDecoration: 'line-through'}}>${serviceDetails.OriginalPrice}</span> &nbsp;${serviceDetails.DiscountedPrice}</div>
                </div>
            </section>
            <Footer />
        </div>
    );
    }
}

export default ServiceCardDetails;
