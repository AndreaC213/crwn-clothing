import React from 'react';
import { connect } from 'react-redux';

import { clearItemFromCart, addItem, removeItem } from '../../redux/cart/cart.actions';

import {
  CheckoutItemContainer,
  ImageContainer,
  TextContainer,
  QuantityContainer,
  RemoveButtonContainer
} from './checkout-item.styles';

// using image container will be easier to 
// control the size of it
// using UTF-8 char for remove icon
// passing the whole items as props to 
// increase nums or decrease
const CheckoutItem = ({ cartItem, clearItem, addItem, removeItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
  <CheckoutItemContainer>
    <ImageContainer> 
      <img src={imageUrl} alt='item' />
    </ImageContainer>
    <TextContainer>{name}</TextContainer>
    <QuantityContainer>
    <div onClick={() => removeItem(cartItem)}>&#10094;</div>
        <span>{quantity}</span>
        <div onClick={() => addItem(cartItem)}>&#10095;</div>
    </QuantityContainer>
    <TextContainer>{price}</TextContainer>
    <RemoveButtonContainer onClick={() => clearItem(cartItem)}>
      &#10005;
    </RemoveButtonContainer>
  </CheckoutItemContainer>
)};

const mapDispatchToProps = dispatch => ({
  clearItem: item => dispatch(clearItemFromCart(item)),
  addItem: item => dispatch(addItem(item)),
  removeItem: item => dispatch(removeItem(item))
});

export default connect(null, mapDispatchToProps)(CheckoutItem);