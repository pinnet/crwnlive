/*
 * sign-in-form.component.jsx
 * Created on Fri Dec 08 2023
 *
 * Copyright (c) 2023 dannyarnold.com
 * Author: Danny Arnold
 */

import { useState } from 'react';
import { SignInContainer, ButtonsContainer } from './sign-in-form.styles';
import FormInput from '../form-input/form-input.component';
import  Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';
import { 
    signInWithGooglePopUp,
    createUserDocumentFromGoogleAuth,
    signInWithEmailAndPasswordAuth    
 } from '../../utils/firebase.utils';

const defaultFormState = {
    email: '',
    password: ''
}

/**
 * Represents a sign-in form component.
 * @returns {JSX.Element} The sign-in form component.
 */
const SignInForm = () => {

    const [formState, setFormState] = useState(defaultFormState);
    const { email, password } = formState;

    const resetForm = () => {
        setFormState(defaultFormState);
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormState({ ...formState, [name]: value });
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await signInWithEmailAndPasswordAuth(email, password);
            resetForm();
        } catch (error) {
            switch (error.code) {
                case 'auth/invalid-password':
                    alert('Invalid password');
                    break;
                case 'auth/user-disabled':
                    alert('User disabled');
                    break;
                case 'auth/user-not-found':
                    alert('User not found');
                    break;
                case 'auth/invalid-credential':
                    alert('Invalid credential');
                    break;                
                default:
                    alert('Unknown error');
            }
            console.log(error.code, error.message); 
        }
    }

    const signInWithGoogle = async () => {
        try {
            const { user } = await signInWithGooglePopUp();
            await createUserDocumentFromGoogleAuth(user);
        }
        catch (error) {
            console.log(error);
        }
    };

    return (
        <SignInContainer>
            <h2>Already have an account</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput handleChange={handleChange} label='Email' required type="email" name='email' value={email} autoComplete='username' />
                <FormInput handleChange={handleChange} label='Password' required type="password" name='password' pattern='.{8,22}' title='minimum 8 characters' value={password} autoComplete='current-password' />
                <ButtonsContainer>
                    <Button type="submit" >Sign In</Button>
                    <Button type="button" buttonType={BUTTON_TYPE_CLASSES.google} onClick={signInWithGoogle} >Google Sign In</Button>
                </ButtonsContainer>
            </form>
        </SignInContainer>
    );
}

export default SignInForm;