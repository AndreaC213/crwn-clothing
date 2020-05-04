import CartActionTypes from './cart.types';

// fire off the an actions holds that snapShot object,
// we used to store in our state at 'firebase.utils'
// this action function '{ toggleCartHidden }' return objects
// each object in the format that action expected it to be
export const toggleCartHidden = () => ({
    type: CartActionTypes.TOGGLE_CART_HIDDEN,
});

// addItem
// step 4 generate action function '{ addItem }'
// to get the 'item' then generate new action function
// 'type' & 'payload'
// passing the 'item' (onClick value) 
// from 'collection-item' as payload
export const addItem = item => ({
  type: CartActionTypes.ADD_ITEM,
  payload: item
})