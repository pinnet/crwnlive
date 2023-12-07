import './auth.styles.scss';
import { useEffect } from 'react';
import { getRedirectResult } from 'firebase/auth';
import { auth, signInWithGoogleRedirect, createUserDocumentFromGoogleAuth } from '../../utils/firebase.utils';

import SignUpForm from '../../components/sign-up-form/sign-up-form.component';
import SignInForm from '../../components/sign-in-form/sign-in-form.component';

const Auth = () => {

    let didMount = false;
    useEffect(() => {
        const checkRedirect = async () => {
            const response = await getRedirectResult(auth);
            if (response) {
                const { user } = response;
                createUserDocumentFromGoogleAuth(user)
                    .then((userRef) => { console.log(userRef); });
            }
        }
        if (!didMount) {
            // eslint-disable-next-line
            didMount = true;
            checkRedirect();
        }
    }, [didMount]);

    const loginWithGoogleRedirect = async () => {
        try {
            await signInWithGoogleRedirect();
        }
        catch (error) {
            console.log(error);
        }
    }

    return (
        <div className='sign-in-page'>
            <SignInForm />
            <SignUpForm />
        </div>
    )
}
export default Auth;