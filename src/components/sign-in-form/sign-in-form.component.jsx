/*
 * sign-in-form.component.jsx
 * Created on Fri Dec 08 2023
 *
 * Copyright (c) 2023 dannyarnold.com
 * Author: Danny Arnold
 */
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { emailSignInStart, googleSignInStart } from '../../store/user/user.actions';

import { SignInContainer, ButtonsContainer } from './sign-in-form.styles';
import FormInput from '../form-input/form-input.component';
import  Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';

const defaultFormState = {
    email: '',
    password: ''
}

/**
 * Represents a sign-in form component.
 * @returns {JSX.Element} The sign-in form component.
 */
const SignInForm = () => {

    const dispatch = useDispatch();

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
            dispatch(emailSignInStart(email, password));
            resetForm();
        } catch (error) {
            console.log(error);
        }
    }
    const signInWithGoogle = async () => {
        try {
            dispatch(googleSignInStart());
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