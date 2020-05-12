import React from 'react';
import { connect } from 'react-redux';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { auth, signInWithGoogle } from '../../firebase/firebase.utils';
import { googleSignInStart } from '../../redux/user/user.actions';

import {
    SignInContainer,
    SignInTitle,
    ButtonsBarContainer
} from './sign-in.styles';

class SignIn extends React.Component{
    constructor(props) {
        super(props);

        this.state= {
            email: '',
            password: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();

        // destructure properties 'email and password' form state
        const { email, password } = this.state;

        // Using auth library to 'signInWithEmailAndPassword'
        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({ email: '', password: '' });
        }
        catch(error){
                console.log(error);
        }

        
    }

    handleChange = event => {
        const {value, name} = event.target;
        this.setState({ [name]: value });
    }

    // pass the property 'isGoogleSignIn' in custom buttom class
    render() {
        const { googleSignInStart } = this.props;
        return(
            <SignInContainer>
                <SignInTitle>I already have an account</SignInTitle>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                      name="email" 
                      type="email" 
                      value={this.state.email} 
                      handleChange={this.handleChange}
                      label='Email'
                      required/>
                    <FormInput 
                      name="password" 
                      type="password" 
                      value={this.state.password} 
                      handleChange={this.handleChange}
                      label='Password'
                      required/>

                    <ButtonsBarContainer>
                        <CustomButton type='submit'> Sign in </CustomButton>
                        <CustomButton 
                            type='buttin'
                            onClick={signInWithGoogle} 
                            isGoogleSignIn
                        > 
                            Sign In with Google 
                        </CustomButton>                     
                    </ButtonsBarContainer>
                </form>
            </SignInContainer>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    googleSignInStart: () => dispatch(onGoogleSignInStart())
})

export default connect(null, mapDispatchToProps)(SignIn);