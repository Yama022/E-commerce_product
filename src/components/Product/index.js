import React from 'react';
import imageFirst from '../../../images/image-product-1.jpg';

import './style.scss';

export default function Product() {
  return (
    <div className="product">

      <div className="product__image">
        <img src={imageFirst} alt="imageFirst" />
      </div>

      <div className="product__info">
        <h1 className="product__info__title">Sneaker company</h1>
        <h2 className="product__info__subtitle">Fall Limited Sneakers</h2>
        <p className="product__info__description">
          These low-profile sneakers are you perfect casual wear companion.
          Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.
        </p>
        <div className="product__info__price">
          <span className="product__info__price__value">$125.00</span>
          <span className="product__info__price__reduction">50%</span>
          <span className="product__info__price__oldPrice">$250.00</span>
        </div>
      </div>
      
    </div>
  );
}
