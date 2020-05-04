// addItem
// step 9 deal with the duplicated items 
// groupomg the same item by increasing their quantity
// with permeter hold current cartItems in array and
// the current 'action.payload' 
export const addItemToCart = (cartItems, cartItemToAdd) => {
  const existingCartItem = cartItems.find(
    cartItem => cartItem.id === cartItemToAdd.id
  );

  // if item exist
  // return new state to let the components render properly
  if (existingCartItem) {
    return cartItems.map(cartItem =>
      cartItem.id === cartItemToAdd.id
      ? { ...cartItem, quantity: cartItem.quantity + 1 }  
      : cartItem
    )
  }

  // else
  // update the cartItem array with quantity as 1
  return [...cartItems, {...cartItemToAdd, quantity: 1}]
};