import React from 'react';

import {
  CartItemContainer,
  ItemDetailsContainer,
  CartItemImage
} from './cart-item.styles';

// addItem
// step 11. create a { cartItem } and 
// destruct the item objects displayed in the cart
const CartItem = ({ item: { imageUrl, price, name, quantity } }) => (
  <CartItemContainer>
    <CartItemImage src={imageUrl} alt='item' />
    <ItemDetailsContainer>
      <span className='name'>{name}</span>
      <span className='price'>
        {quantity} x ${price}
      </span>
    </ItemDetailsContainer>
  </CartItemContainer>
)

export default React.memo(CartItem);