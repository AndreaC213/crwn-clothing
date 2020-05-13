import CartActionTypes from './cart.types';
import { addItemToCart, removeItemFromCart } from './cart.utils';

// addItem 
// step 1. add new value we want to tarck to current 'cartItems array'
// adding cart items array to hold the state 
const INITIAL_STATE ={
    hidden: true,
    cartItems: []
};

// addItem
// step 2. modify 'cartItems array' (property) 
// add the item into array whatever in that payload 
// handle duplication latter
// addItem
// step 5. reducer listen the new case 'CartActionTypes.ADD_ITEM'
// after action come in, 
// update 'cartItems' by using { addItemToCart }
// addItem
// step 10. leverage {addItemToCart} to count items
const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartActionTypes.TOGGLE_CART_HIDDEN:
      return {
          ...state,
          hidden: !state.hidden
      };
    case CartActionTypes.ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload)
      };
    case CartActionTypes.REMOVE_ITEM:
      return {
        ...state,
        cartItems: removeItemFromCart(state.cartItems, action.payload)
      }
    case CartActionTypes.CLEAR_ITEM_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          cartItem => cartItem.id !== action.payload.id
        )
      };
    case CartActionTypes.CLEAR_CART:
      return {
        ...state,
        cartItems: []
      }
    default: 
    return state;
  }
};

export default cartReducer;