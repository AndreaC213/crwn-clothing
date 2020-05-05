import React from 'react';
import { connect } from 'react-redux';

import { clearItemFromCart, addItem, removeItem } from '../../redux/cart/cart.actions';

import './checkout-item.styles.scss';

// using image container will be easier to 
// control the size of it
// using UTF-8 char for remove icon
// passing the whole items as props to 
// increase nums or decrease
const CheckoutItem = ({ cartItem, clearItem, addItem, removeItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
  <div className='checkout-item'>
    <div className='image-container'> 
      <img src={imageUrl} alt='item' />
    </div>
    <span className='name'>{name}</span>
    <span className='quantity'>
      <div className='arrow' onClick={() => removeItem(cartItem)}>
        &#10094;
      </div>
      <span className='value'>{quantity}</span>
      <div className='arrow' onClick={() => addItem(cartItem)}>
        &#10095;
      </div>
    </span>
    <span className='price'>{price}</span>
    <span className='remove-button' onClick={() => clearItem(cartItem)}>
      &#10005;
    </span>
  </div>
)};

const mapDispatchToProps = dispatch => ({
  clearItem: item => dispatch(clearItemFromCart(item)),
  addItem: item => dispatch(addItem(item)),
  removeItem: item => dispatch(removeItem(item))
});

export default connect(null, mapDispatchToProps)(CheckoutItem);