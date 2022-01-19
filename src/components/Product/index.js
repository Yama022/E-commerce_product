import React from 'react';
import ImageMain from '../../../images/image-product-1.jpg';
import ImageFirst from '../../../images/image-product-1-thumbnail.jpg';
import ImageSecond from '../../../images/image-product-2-thumbnail.jpg';
import ImageThird from '../../../images/image-product-3-thumbnail.jpg';
import ImageFourth from '../../../images/image-product-4-thumbnail.jpg';

import './style.scss';

export default function Product() {
  return (
    <div className="product">

      <div className="product__image">
        <img src={ImageMain} alt="ImageMain" />
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

      <div className="product__choiceImage">
        <img className="product__choiceImage__image product__choiceImage__image--active" src={ImageFirst} alt="ImageFirst" />
        <img src={ImageSecond} alt="ImageSecond" />
        <img src={ImageThird} alt="ImageThird" />
        <img src={ImageFourth} alt="ImageFourth" />
      </div>

    </div>
  );
}
