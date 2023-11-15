import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../css/ServiceCard.css';
import 'font-awesome/css/font-awesome.min.css';
import { useNavigate } from 'react-router-dom';
import LoaderSpinner from '../components/LoaderSpinner';

const AddToCartCards = ({ data, onRemove }) => {
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
            ServiceProviderId2: null,
            ServiceProviderId3: null,
            NetAmount: data.DiscountedPrice,
            Tax: ((data.DiscountedPrice / 100) * 3.5).toFixed(2),
            Discount: 10,
            TotalPrice: ((data.DiscountedPrice + ((data.DiscountedPrice / 100) * 3.5)) - 10).toFixed(2),
            BookingStartDate: new Date(),
            BookingEndDate: new Date(),
            SlotTime: null,
            IsActive: true,
            CreatedBy: "System",
            UpdatedBy: ""
        };
        // Navigate to the make-appointment page with the payload
        navigate('/make-appointment', { state: { bookingPayload: payload } });
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
            {data.IsHotDeal && <div className="badge">Hot</div>}
            <div className="product-tumb">
                <img src={data.ImageURL} alt="" />
            </div>
            <div className="product-details">
                <span className="product-catagory">{data.ServiceType}</span>
                <h4>{data.FirstName} {data.LastName}</h4>
                <div className="ratings">
                    <b>{data.Ratings}</b>
                    <i className="fa fa-star ratings-yellow-star" aria-hidden="true"></i>
                </div>
                <p>{data.Description}</p>
                <div className="address-contact">
                    <b>Address: {data.Address1}, {data.City}, {data.State} {data.ZipCode}</b><br/>
                    <b>ContactNo: {data.ContactNo}</b>
                </div>
                <div className="product-bottom-details">
                    <div className="product-price">
                        <span style={{ textDecoration: 'line-through' }}>${data.OriginalPrice}</span>
                        &nbsp;${data.DiscountedPrice}
                    </div>
                    <div className="product-links">
                        <button className='favourite-delete' onClick={handleRemove}>Remove</button>&emsp;
                        <button className='favourite-delete' onClick={handleBookService}>Book Service</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddToCartCards;
