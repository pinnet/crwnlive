import { useState } from 'react';

import './sign-in-form.styles.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
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
            const { user } = await signInWithEmailAndPasswordAuth(email, password);
            console.log(user);
            resetForm();
        } catch (error) {
            if (error.code === 'auth/invalid-credential') {
                alert('Unknown email address / password. Please try again or sign up for an account.');
            }
            console.log(error);
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
                <FormInput handleChange={handleChange} label='Password' required type="password" name='password' value={password} autoComplete='current-password' />
                <div className='buttons-container'>
                    <CustomButton type="submit" >Sign In</CustomButton>
                    <CustomButton buttonType='google' onClick={signInWithGoogle} >Sign In With Google</CustomButton>
                </div>
            </form>
        </div>
    );
}

export default SignInForm;