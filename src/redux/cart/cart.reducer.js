import CartActionTypes from './cart.types';

// adding cart items array to hold the state
const INITIAL_STATE ={
    hidden: true,
    cartItems: []
};

// add the item into array whatever in that payload 
// handle duplication latter
const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartActionTypes.TOGGLE_CART_HIDDEN:
      return {
          ...state,
          hidden: !state.hidden
      }
    case CartActionTypes.ADD_ITEM:
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload]
      }
    default: 
    return state;
  }
};

export default cartReducer;