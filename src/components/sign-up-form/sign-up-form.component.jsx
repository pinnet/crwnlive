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
        <div>
            <h1>Sign Up Form</h1>
            <form onSubmit={handleSubmit}>
                <label>Name</label>
                <input required type="text" placeholder="Enter Name" name='displayName' value={displayName} onChange={handleChange} />
                <label>Email</label>
                <input required type="email" placeholder="Enter Email" name='email' value={email} onChange={handleChange} />
                <label>Password</label>
                <input required type="password" placeholder="Enter a password" name='password' value={password} onChange={handleChange} />
                <input required type="password" placeholder="Confirm Password" name='confirmPassword' value={confirmPassword} onChange={handleChange} />
                <button type="submit">Sign Up</button>
            </form>
        </div>
    );

}

export default SignUpForm;