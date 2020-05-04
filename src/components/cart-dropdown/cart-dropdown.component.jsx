import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';

import './cart-dropdown.styles.scss';
import { selectCartItems } from '../../redux/cart/cart.selectors';

// addItem
// step 12.
// call { cartItems } then it will connect 'cartItems reducer' and 
// { map } all the current cart item display by { CartItem }
const CartDropdown = ({ cartItems }) => (
    <div className='cart-dropdown'>
        <div className='cart-items'>
            {
                cartItems.map(cartItem => (
                    <CartItem key={cartItem.id} item={cartItem}/>
            ))}
        </div>
        <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
);

// addItem
// step 11. we need to pull out the items from reducer and 
// connect 'cart-dropdown.component' to current 'cart-item.component'
// then dispatch the reducer and get the current state of
// the current component 'cart-dropdown'
const mapStateToProps = createStructuredSelector({
    cartItems : selectCartItems
});

export default connect(mapStateToProps)(CartDropdown);