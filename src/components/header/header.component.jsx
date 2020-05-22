import React from 'react';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { auth } from '../../firebase/firebase.utils';
import { default as CartIcon } from '../cart-icon/cart-icon.container';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { selectCurrentUser } from '../../redux/user/user.selectors';

import { ReactComponent as Logo } from '../../assets/crown.svg';

import { HeaderContainer, LogoContainer, OptionContainer, OptionLink } from './header.styles';

// destructure the current state into the header
// see it's signin or sign out
const Header = ({ currentUser, hidden }) => (
    <HeaderContainer>
        <LogoContainer to="/">
            <Logo className='logo' />
        </LogoContainer>
        <OptionContainer>
            <OptionLink to='/shop'>
                SHOP
            </OptionLink>
            <OptionLink to='/shop'>
                CONTACT
            </OptionLink>
            {
              currentUser ?
              (<OptionLink as='div' onClick={() => auth.signOut()}>
                SIGN OUT
              </OptionLink>
              ) : (
              <OptionLink to='signin'>
                SIGN IN
              </OptionLink>
              )
            }
            <CartIcon />
        </OptionContainer>
        { hidden ? null : <CartDropdown /> }
    </HeaderContainer>
);

// pass the root reducer then get the current state 
// from it's children reducer
// construct mutiple states from root reducer
// passing our state into the selectors
// by setting state as an object and point to corresponded selector
// optimize by using {createStructuredSelector} to passing 'state'
const mapStateToProps = createStructuredSelector({
  currentUser : selectCurrentUser
});

// get the current state for header
export default connect(mapStateToProps)(Header);