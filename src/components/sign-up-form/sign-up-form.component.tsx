/*
 * sign-up-form.component.jsx
 * Created on Fri Dec 08 2023
 *
 * Copyright (c) 2023 dannyarnold.com
 * Author: Danny Arnold
 */
//#region library imports
import { useState, FormEvent, ChangeEvent } from 'react';
import { useDispatch } from 'react-redux';
import { AuthError, AuthErrorCodes } from 'firebase/auth';
//#endregion

import { signUpUserStart } from '../../store/user/user.actions';
import { SignUpContainer } from  './sign-up-form.styles';
import FormInput from '../form-input/form-input.component';
import Button from '../button/button.component';

const defaultFormState = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
}

/**
 * Represents a sign-up form component.
 * @returns {JSX.Element} The sign-up form component.
 */
const SignUpForm = () => {
    const dispatch = useDispatch();
    const [formState, setFormState] = useState(defaultFormState);
    const { displayName, email, password, confirmPassword } = formState;
    
    const resetForm = () => {
        setFormState(defaultFormState);
    };

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormState({ ...formState, [name]: value });
    }
    const handleSubmit = async (event : FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (password !== confirmPassword) {
            alert('Passwords do not match');
            return;
        }
        try {
            dispatch(signUpUserStart(email, password, displayName));
            resetForm();
        } catch (error) {

            if (error as AuthError) {

                switch ((error as AuthError).code) {
                    case AuthErrorCodes.EMAIL_EXISTS:
                        alert('Email address already exists');
                        break;
                    case AuthErrorCodes.INVALID_EMAIL:
                        alert('Invalid email address');
                        break;
                    case AuthErrorCodes.WEAK_PASSWORD:
                        alert('Password must be at least 8 characters');
                        break;
                    default:
                        alert('An error occurred');
                        break;
                }
            }
            console.log(error);
        }
    }
    return (
        <SignUpContainer>
            <h2>Don't have an account</h2>
            <span>Sign up with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput onChange={handleChange} label='Display Name' required type="text" name='displayName' value={displayName} />
                <FormInput onChange={handleChange} label='Email' required type="email" name='email' value={email} autoComplete='username' />
                <FormInput onChange={handleChange} label='Password' required type="password" name='password' pattern='.{8,12}' title='minimum 8 characters' value={password} autoComplete='new-password' />
                <FormInput onChange={handleChange} label='Confirm Password' required type="password" name='confirmPassword' value={confirmPassword} autoComplete='new-password' />
                <Button type="submit" >Sign Up</Button>
            </form>
        </SignUpContainer>
    );

}

export default SignUpForm;