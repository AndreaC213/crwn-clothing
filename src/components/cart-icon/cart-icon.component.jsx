import React from 'react';
import { connect } from 'react-redux';

import { toggleCartHidden } from '../../redux/cart/cart.actions';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

import './cart-icon.styles.scss'

// destruct 'itemCount' pass in { CartIcon } as props
const CartIcon = ({ toggleCartHidden, itemCount }) => (
    <div className='cart-icon' onClick={toggleCartHidden}>
        <ShoppingIcon className='shopping-icon' />
        <span className='item-count'>{itemCount}</span>
    </div>
);

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
});

// changed the cart icon number in time when we add item
const mapStateToProps = ({ cart: { cartItems } }) => ({
    itemCount: cartItems.reduce(
        (accumalatedQuantity, cartItem) => accumalatedQuantity + cartItem.quantity, 
    0
    )
})

// pass the 'itemCount' as parameter into {CartIcon} 
export default connect(
    mapStateToProps, 
    mapDispatchToProps
    )(CartIcon);