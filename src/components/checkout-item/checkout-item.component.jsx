import React from 'react';

import './checkout-item.styles.scss';

// using image container will be easier to 
// control the size of it
// using UTF-8 char for remove
const CheckoutItem = () => (
  <div className='checkout-item'>
    <div className='image-container'>
      <img alt='item' />
    </div>
    <span className='name'></span>
    <span className='quantity'></span>
    <span className='price'></span>
    <span className='remove-botton'>&#10005;</span>
  </div>
)

