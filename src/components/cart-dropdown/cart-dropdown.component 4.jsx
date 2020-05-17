import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';

import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { toggleCartHidden } from '../../redux/cart/cart.actions';

import {
    CartDropdownContainer,
    CartItemsContainer,
    EmptyMessageContainer
} from './cart-dropdown.styles';


// addItem
// step 12.
// call { cartItems } then it will connect 'cartItems reducer' and 
// { map } all the current cart item display by { CartItem }
// ? true : false (also 0: present false in JavaScript)
const CartDropdown = ({ cartItems, history, dispatch }) => (
    <CartDropdownContainer>
        <CartItemsContainer>
            {cartItems.length ? (
                cartItems.map(cartItem => (
                    <CartItem key={cartItem.id} item={cartItem} />
                ))
            ) : (
                <EmptyMessageContainer>Your cart is empty</EmptyMessageContainer>
            )}
        </CartItemsContainer>
        <CustomButton 
        onClick={() => {
            history.push('/checkout');
            dispatch(toggleCartHidden());
        }}
        >
            GO TO CHECKOUT
        </CustomButton>
    </CartDropdownContainer>
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
// connect pass dispatch into our component as a prop
// if we do not supply second argument into connect()
export default withRouter(connect(mapStateToProps)(CartDropdown));