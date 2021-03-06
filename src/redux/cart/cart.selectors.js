import { createSelector } from 'reselect';

// return the state we made changed
const selectCart = state => state.cart;

// select the property inside the state to 
// create a memorize selector
// 2 parameters:
// first take the array of state
// second return the value we want after render this function
export const selectCartItems = createSelector(
  [selectCart],
  cart => cart.cartItems
);

export const selectCartHidden = createSelector(
  [selectCart],
  cart => cart.hidden
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  cartItems => 
    cartItems.reduce(
      (accumalatedQuantity, cartItem) => 
      accumalatedQuantity + cartItem.quantity, 
      0
    )
);

// total in checkout
export const selectCartTotal = createSelector(
  [selectCartItems],
  cartItems => 
    cartItems.reduce(
      (accumalatedQuantity, cartItem) => 
      accumalatedQuantity + cartItem.quantity * cartItem.price, 
      0
    )
);