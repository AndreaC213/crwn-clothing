import React from 'react';
import {Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import './App.css';

import HomePage from './components/pages/homepage/homepage.component';
import ShopPage from './components/pages/shop/shop.component';
import SignInAndSignUpPage from './components/pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import Header from './components/header/header.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { setCurrentUser } from './redux/user/user.actions';

// how do we confirm the access by google sign in
// function -> class to acess state
class App extends React.Component {
  unsubscribeFromAuth = null

  // Get persistence of our user section
  // get promise from auth by using 'createUserProfileDocument' from firebase
  componentDidMount() {
    const {setCurrentUser} = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {

        // if user not in firestore create one then return userRef
        const userRef = await createUserProfileDocument(userAuth);

        // subscribe to this userRef
        // then set state for current user by using onSnapshop and .data() and
        // 'action.js'
        userRef.onSnapshot(snapShot => {
          setCurrentUser({
              id: snapShot.id,
              ...snapShot.data()
          });
        });
      }
      // log out 
      else {
        setCurrentUser(userAuth);
      }
    });
  }

  // want to sign out -> get this subscribe unmount
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  // pass current state as a property
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route path='/shop' component={ShopPage}/>
          <Route 
            exact 
            path='/signin' 
            render={() => 
              this.props.currentUser ? (
                <Redirect to='/' />
              ) : (
                <SignInAndSignUpPage/>
              )
            }
          />
        </Switch>
      </div>
    );
  }
  
}

// getting current user form redux state
const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser
})

// getting back the object from action by using 'dispatch'
const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(
  mapStateToProps, 
  mapDispatchToProps
  )
  (App);
