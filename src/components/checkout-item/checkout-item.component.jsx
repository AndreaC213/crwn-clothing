import React from 'react';

import './checkout-item.styles.scss';

// using image container will be easier to 
// control the size of it
// using UTF-8 char for remove icon
// passing the whole items as props to 
// increase nums or decrease
const CheckoutItem = ({ cartItem: { name, imageUrl, price, quantity } }) => (
  <div className='checkout-item'>
    <div className='image-container'>
      <img src={imageUrl} alt='item' />
    </div>
    <span className='name'>{name}</span>
    <span className='quantity'>{quantity}</span>
    <span className='price'>{price}</span>
    <span className='remove-botton'>&#10005;</span>
  </div>
);

export default CheckoutItem;