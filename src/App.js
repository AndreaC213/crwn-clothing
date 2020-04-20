import React from 'react';
import {Switch, Route } from 'react-router-dom';
import './App.css';
import HomePage from './components/pages/homepage/homepage.component';
import ShopPage from './components/pages/shop/shop.component';
import SignInAndSignUpPage from './components/pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import Header from './components/header/header.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

// how do we confirm the access by google sign in
// function -> class to acess state
class App extends React.Component {

  constructor() {
    super()

    // want to know the sign in and sign out state change 
    // by using 'onAuthStateChanged'
    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null

  // Get persistence of our user section
  // get promise from auth by using 'createUserProfileDocument' from firebase
  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {

        // if user not in firestore create one then return userRef
        const userRef = await createUserProfileDocument(userAuth);

        // subscribe to this userRef
        // then set state for current user by using onSnapshop and .data()
        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          });
        });
      }
      // log out 
      else {
        this.setState({currentUser: userAuth});
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
        <Header currentUser={this.state.currentUser}/>
        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route path='/shop' component={ShopPage}/>
          <Route path='/signin' component={SignInAndSignUpPage}/>
        </Switch>
      </div>
    );
  }
  
}

export default App;
