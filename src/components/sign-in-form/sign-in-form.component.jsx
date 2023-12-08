/*
 * sign-in-form.component.jsx
 * Created on Fri Dec 08 2023
 *
 * Copyright (c) 2023 dannyarnold.com
 * Author: Danny Arnold
 */

import { useState } from 'react';
import './sign-in-form.styles.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { 
    signInWithGooglePopUp,
    createUserDocumentFromGoogleAuth,
    signInWithEmailAndPasswordAuth,
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
            const { user } = await signInWithEmailAndPasswordAuth(email, password);
            console.log(user);
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
        <div className='sign-in-container'>
            <h2>Already have an account</h2>
            <form onSubmit={handleSubmit}>
                <FormInput handleChange={handleChange} label='Email' required type="email" name='email' value={email} autoComplete='username' />
                <FormInput handleChange={handleChange} label='Password' required type="password" name='password' pattern='.{8,22}' title='minimum 8 characters' value={password} autoComplete='current-password' />
                <div className='buttons-container'>
                    <CustomButton type="submit" >Sign In</CustomButton>
                    <CustomButton type="button" buttonType='google' onClick={signInWithGoogle} >Google Sign In</CustomButton>
                </div>
            </form>
        </div>
    );
}

export default SignInForm;