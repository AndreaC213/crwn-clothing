import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';

import {
    CartContainer,
    ShoppingCartIcon,
    ItemCountContainer
} from './cart-icon.styles';

// destruct 'itemCount' pass in { CartIcon } as props
const CartIcon = ({ toggleCartHidden, itemCount }) => (
    <CartContainer onClick={toggleCartHidden}>
        <ShoppingCartIcon/>
        <ItemCountContainer>{itemCount}</ItemCountContainer>
    </CartContainer>
);

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
});

// changed the cart icon number in time when we add item
// using 'reselect' from library to manage the state to
// not cache every state after we trigger any action
const mapStateToProps = createStructuredSelector({
    itemCount: selectCartItemsCount
});

// pass the 'itemCount' as parameter into {CartIcon} 
export default connect(
    mapStateToProps, 
    mapDispatchToProps
    )(CartIcon);