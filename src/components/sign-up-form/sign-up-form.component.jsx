import './sign-up-form.styles.scss';
import { useState } from 'react';
import { createAuthUserFromEmailAndPassword, createUserDocumentFromGoogleAuth } from '../../utils/firebase.utils';

import Form from '../form/form.component';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

const defaultFormState = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
}

const SignUpForm = () => {
    const [formState, setFormState] = useState(defaultFormState);
    const { displayName, email, password, confirmPassword } = formState;

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
            const { user } = await createAuthUserFromEmailAndPassword(email, password);
            console.log(user);
            await createUserDocumentFromGoogleAuth(user, { displayName });
            setFormState(defaultFormState);
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
            <form onSubmit={handleSubmit}>
                <FormInput handleChange={handleChange} label='Display Name' required type="text" name='displayName' value={displayName} />
                <FormInput handleChange={handleChange} label='Email' required type="email" name='email' value={email} />
                <FormInput handleChange={handleChange} label='Password' required type="password" name='password' value={password} />
                <FormInput handleChange={handleChange} label='Confirm Password' required type="password" name='confirmPassword' value={confirmPassword} />
                <CustomButton type="submit" >Sign Up</CustomButton>
            </form>
        </div>
    );

}

export default SignUpForm;