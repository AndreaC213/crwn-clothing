import React from 'react';
import { connect } from 'react-redux';

import { clearItemFromCart } from '../../redux/cart/cart.actions';

import './checkout-item.styles.scss';

// using image container will be easier to 
// control the size of it
// using UTF-8 char for remove icon
// passing the whole items as props to 
// increase nums or decrease
const CheckoutItem = ({ cartItem, clearItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
  <div className='checkout-item'>
    <div className='image-container'> 
      <img src={imageUrl} alt='item' />
    </div>
    <span className='name'>{name}</span>
    <span className='quantity'>{quantity}</span>
    <span className='price'>{price}</span>
    <span className='remove-botton' onClick={() => clearItem(cartItem)}>
      &#10005;
    </span>
  </div>
)};

const mapDispatchToProp = dispatch => ({
  clearItem: Item => dispatch(clearItemFromCart(item))
});

export default connect(null, mapDispatchToProp)(CheckoutItem);