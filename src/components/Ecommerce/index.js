import React from 'react';
import Header from '../Header';
import Product from '../Product';
import './style.scss';

export default function Ecommerce() {
  return (
    <div className="ecommerce">
      <Header />  
      <Product />
      
    </div>
  );
}
