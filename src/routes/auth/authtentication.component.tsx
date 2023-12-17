/**
 * @file authtentication.component.tsx
 * @created Thu Dec 14 2023
 * @copyright Copyright (c) 2023 dannyarnold.com
 * @author Danny Arnold
 **/

import { Fragment } from 'react';
import { AuthenticationContainer } from './authentication.styles';
import SignUpForm from '../../components/sign-up-form/sign-up-form.component';
import SignInForm from '../../components/sign-in-form/sign-in-form.component';

/**
 * Renders the Authentication component.
 * 
 * @returns {JSX.Element} The rendered Authentication component.
 */
const Authentication = () => {
    return (
        <Fragment>
            <h2>Sign In</h2>
            <AuthenticationContainer>
                <SignInForm />
                <SignUpForm />
            </AuthenticationContainer>
        </Fragment>
    )
}
export default Authentication;