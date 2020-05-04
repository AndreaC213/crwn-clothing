import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';

import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';

import './cart-dropdown.styles.scss';
import { selectCartItems } from '../../redux/cart/cart.selectors';

// addItem
// step 12.
// call { cartItems } then it will connect 'cartItems reducer' and 
// { map } all the current cart item display by { CartItem }
// ? true : false (also 0: present false in JavaScript)
const CartDropdown = ({ cartItems, history }) => (
    <div className='cart-dropdown'>
        <div className='cart-items'>
            {cartItems.length ? (
                cartItems.map(cartItem => (
                    <CartItem key={cartItem.id} item={cartItem} />
                ))
            ) : (
                <span className='empty-message'>Your cart is empty</span>
            )}
        </div>
        <CustomButton onClick={() => history.push('./checkout')}>
            GO TO CHECKOUT
        </CustomButton>
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

// wrape {connect} inside {withRouter}
// passed down the context to all its children
// which is history and location (path)
export default withRouter(connect(mapStateToProps)(CartDropdown));