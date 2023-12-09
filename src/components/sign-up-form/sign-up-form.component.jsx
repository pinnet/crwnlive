/*
 * sign-up-form.component.jsx
 * Created on Fri Dec 08 2023
 *
 * Copyright (c) 2023 dannyarnold.com
 * Author: Danny Arnold
 */

import { useState} from 'react';
import { createAuthUserFromEmailAndPassword } from '../../utils/firebase.utils';
import './sign-up-form.styles.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

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
    const [formState, setFormState] = useState(defaultFormState);
    const { displayName, email, password, confirmPassword } = formState;
    
    const resetForm = () => {
        setFormState(defaultFormState);
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormState({ ...formState, [name]: value });
    }
    const handleSubmit = async (event) => {
        event.preventDefault();
        if (password !== confirmPassword) {
            alert('Passwords do not match');
            return;
        }
        try {
            await createAuthUserFromEmailAndPassword(email, password);
            resetForm();
        } catch (error) {
            if (error.code === 'auth/email-already-in-use') {
                alert('Email already in use');
            }
            console.log(error);
        }
    }
    return (
        <div className='sign-up-container'>
            <h2>Don't have an account</h2>
            <span>Sign up with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput handleChange={handleChange} label='Display Name' required type="text" name='displayName' value={displayName} />
                <FormInput handleChange={handleChange} label='Email' required type="email" name='email' value={email} autoComplete='username' />
                <FormInput handleChange={handleChange} label='Password' required type="password" name='password' pattern='.{8,12}' title='minimum 8 characters' value={password} autoComplete='new-password' />
                <FormInput handleChange={handleChange} label='Confirm Password' required type="password" name='confirmPassword' value={confirmPassword} autoComplete='new-password' />
                <CustomButton type="submit" >Sign Up</CustomButton>
            </form>
        </div>
    );
}

export default SignUpForm;