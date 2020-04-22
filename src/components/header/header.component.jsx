import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { auth } from '../../firebase/firebase.utils';

import './header.styles.scss';

// destructure the current state into the header
// see it's signin or sign out
const Header = ({ currentUser }) => (
    <div className='header'>
        <Link className='logo-container' to="/">
            <Logo className='logo' />
        </Link>
        <div className='options'>
            <Link className='option' to='/shop'>
                SHOP
            </Link>
            <Link className='option' to='/shop'>
                CONTACT
            </Link>
            {
              currentUser ?
              (<div className='option' onClick={() => auth.signOut()}>
                SIGN OUT
              </div>
              ) : (
              <Link className='option' to='signin'>
                SIGN IN
              </Link>)
              
            }
        </div>
    </div>
);

// pass the root reducer then get the current state 
// from it's children reducer
const mapStateToProps = state => ({
  currentUser: state.user.currentUser
});

// get the current state for header
export default connect(mapStateToProps)(Header);