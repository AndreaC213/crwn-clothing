import React from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

import { SignUpContainer, SignUpTitle } from './sign-up.styles';

class SignUp extends React.Component {
    constructor() {
        super();

        this.state = {
            displayName: '',
            email: '',
            password: '',
            comfirmPassword: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();

        const { displayName, email, password, comfirmPassword } = this.state;

        if (password !== comfirmPassword) {
            alert("passwords don't match");
            return;
        }

        // Using auth library to 'createUserWithEmailAndPassword'
        try {
            const { user } = await auth.createUserWithEmailAndPassword(
                email, 
                password
            );

            await createUserProfileDocument(user, { displayName });
            
            // clear the form  
            this.setState({
                displayName: '',
                email: '',
                password: '',
                comfirmPassword: ''
            })
        }
        catch(error) {
            console.error(error);
        }
    };

    handleChange = event => {
        const { name, value } = event.target;

        // get name as out object
        this.setState({ [name]: value });
    }

    render() {
        const { displayName, email, password, comfirmPassword } = this.state;
        return(
            <SignUpContainer>
                <SignUpTitle>I do not have an account</SignUpTitle>
                <span>Sign up with your email and password</span>
                <form className='sign-up-form' onSubmit={this.handleSubmit}>
                    <FormInput
                    type='text'
                    name='displayName'
                    value={displayName}
                    onChange={this.handleChange}
                    label='Display Name'
                    required
                    />
                    <FormInput
                    type='email'
                    name='email'
                    value={email}
                    onChange={this.handleChange}
                    label='Email'
                    required
                    />
                    <FormInput
                    type='password'
                    name='password'
                    value={password}
                    onChange={this.handleChange}
                    label='Password'
                    required
                    />
                    <FormInput
                    type='password'
                    name='comfirmPassword'
                    value={comfirmPassword}
                    onChange={this.handleChange}
                    label='Comfirm Password'
                    required
                    />
                    <CustomButton type='submit'>SIGN UP</CustomButton>
                </form>
            </SignUpContainer>
        )
    }
}

export default SignUp;