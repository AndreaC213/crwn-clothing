import React from 'react';
import {Switch, Route } from 'react-router-dom';
import './App.css';
import HomePage from './components/pages/homepage/homepage.component';
import ShopPage from './components/pages/shop/shop.component';
import SignInAndSignUpPage from './components/pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import Header from './components/header/header.component';
import { auth } from './firebase/filebase.utils';

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
  // subscriber will keep track of the user auth
  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });

      console.log(user);
    });
  }

  // want to sign out -> get this subscribe unmount
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header/>
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
