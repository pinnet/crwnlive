import './sign-in-form.styles.scss';

import { useState } from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
const defaultFormState = {
    email: '',
    password: ''
}

const SignInForm = () => {
    const [formState, setFormState] = useState(defaultFormState);
    const { email, password } = formState;

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormState({ ...formState, [name]: value });
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
    }

    return (
        <div className='sign-in-container'>
            <h2>Already have an account</h2>
            <form onSubmit={handleSubmit}>
                <FormInput handleChange={handleChange} label='Email' required type="email" name='email' value={email} />
                <FormInput handleChange={handleChange} label='Password' required type="password" name='password' value={password} />
                <CustomButton type="submit" >Sign In</CustomButton>
                <CustomButton buttonType='google'>Sign In With Google</CustomButton>
            </form>
        </div>
    );
}

export default SignInForm;