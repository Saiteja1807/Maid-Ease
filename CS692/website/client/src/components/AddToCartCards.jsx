import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../css/ServiceCard.css';
import 'font-awesome/css/font-awesome.min.css';
import { useNavigate } from 'react-router-dom';
import LoaderSpinner from '../components/LoaderSpinner';

const AddToCartCards = ({data, onRemove}) => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);

    const handleRemove = () => {
        axios
          .delete(`http://localhost:4000/cartdetails/${data.CartDetailId}`)
          .then((response) => {
            if (response.status === 204) {
              // Removal was successful
              alert('Removed from your Cart.');
              onRemove(data.CartDetailsId); // Ensure you're removing the correct item ID
              navigate('/add-to-cart/1'); // Navigate back to cart or to the relevant page
            } else {
              console.error('Unexpected response status:', response.status);
            }
          })
          .catch((error) => {
            console.error('Error removing item from cart:', error);
          })
          .finally(() => {
            // Reset the loading state once the request is completed
            setLoading(false);
          });
    };
    
    const handleBookService = () => {
      const payload = {
          UserId: data.UserId,
          ServiceProviderId1: data.ServiceProviderId,
          ServiceProviderId2 : null,
          ServiceProviderId3: null,
          NetAmount: data.DiscountedPrice,
          Tax: ((data.DiscountedPrice/100) * 3.5).toFixed(2),
          Discount: 10,
          TotalPrice:((data.DiscountedPrice + ((data.DiscountedPrice/100) * 3.5)) - 10).toFixed(2),
          BookingStartDate: new Date(),
          BookingEndDate: new Date(),
          IsActive: true,
          CreatedBy: "System",
          UpdatedBy : ""
      };

      axios
          .post('http://localhost:4000/bookingdetails', payload)
          .then((response) => {
              if (response.status === 201) {
                  handleRemove();
                  alert('Service booked successfully.');
                  // Additional logic after booking (like navigating to another page if needed)
              } else {
                  console.error('Unexpected response status:', response.status);
              }
          })
          .catch((error) => {
              console.error('Error booking service:', error);
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

    return (
        <div className="product-card">
        { data.IsHotDeal ? <div className="badge">Hot</div> : null }
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
            <div className="product-price"><span  style={{textDecoration: 'line-through'}}>${data.OriginalPrice}</span> &nbsp;${data.DiscountedPrice}</div>
            <div className="product-links">
            <span><button className='favourite-delete' onClick={handleRemove}>Remove</button></span> &emsp; 
              <span><button className='favourite-delete' onClick={handleBookService}>Book Service</button></span>
            </div>
          </div>
        </div>
      </div>
)};

export default AddToCartCards;