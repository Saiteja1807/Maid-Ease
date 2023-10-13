import React from 'react';
import '../css/ServiceCard.css';
import 'font-awesome/css/font-awesome.min.css';

const ServiceCard = ({data}) => {
    return (
        <div className="product-card">
        <div className="badge">Hot</div>
        <div className="product-tumb">
          <img src={data.ImageURL} alt=""/>
        </div>
        <div className="product-details">
          <span className="product-catagory">{data.ServiceType}</span>
          <h4><a href="">{data.FirstName}  {data.LastName}</a></h4>
          <p>{data.Description}</p>
          <p><b>Address: {data.Address1}, {data.City}, {data.StateName} {data.ZipCode}<br/>
          ContactNo: {data.ContactNo}</b></p>
          <div className="product-bottom-details">
            <div className="product-price">${data.Price}</div>
            <div className="product-links">
              <a href=""><i className="fa fa-heart"></i></a>
              <a href=""><i className="fa fa-shopping-cart"></i></a>
            </div>
          </div>
        </div>
      </div>
)};

export default ServiceCard;