import React from 'react';
import '../css/ServiceCard.css';

function ServiceCard() {
    return (
        <div className="product-card">
        <div className="badge">Hot</div>
        <div className="product-tumb">
          <img src="/images/laundry7.jpeg" alt=""/>
        </div>
        <div className="product-details">
          <span className="product-catagory">HouseHold Services</span>
          <h4><a href="">Alex Laundry</a></h4>
          <p>Alex Laundry is a standout service provider in the Edison community, boasting an impressive 4.5-star rating. With a keen eye for detail and a commitment to customer satisfaction, Alex has earned a reputation as a reliable and efficient laundry professional.
            <br/><br/>Known for their punctuality and precision, Alex ensures that every garment entrusted to them receives the utmost care and attention. Their expertise extends beyond the routine wash-and-fold, as they are adept at handling delicate fabrics and special care items. Customers appreciate Alex's meticulous approach, knowing that their clothing is in capable hands.
            </p>
          <div className="product-bottom-details">
            <div className="product-price"><small>$96.00</small>$49.99</div>
            <div className="product-links">
              <a href=""><i className="fa fa-heart"></i></a>
              <a href=""><i className="fa fa-shopping-cart"></i></a>
            </div>
            <div><i className="fa-solid fa-star fa-flip"></i></div>
          </div>
        </div>
      </div>
)};

export default ServiceCard;