import { useEffect } from 'react';
import { getRedirectResult } from 'firebase/auth';
import SignUpForm from '../../components/sign-up-form/sign-up-form.component';
import {
    auth,
    signInWithGooglePopUp,
    signInWithGoogleRedirect,
    createUserDocumentFromGoogleAuth
} from '../../utils/firebase.utils';

const SignIn = () => {

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

    const loginWithGooglePopUp = async () => {
        try {
            const { user } = await signInWithGooglePopUp();
            createUserDocumentFromGoogleAuth(user)
                .then((userRef) => { console.log(userRef); });

        } catch (error) {
            console.log(error);
        }
    }

    const loginWithGoogleRedirect = async () => {
        try {
            await signInWithGoogleRedirect();
        }
        catch (error) {
            console.log(error);
        }
    }
    return (
        <div>
            <h2>Sign In</h2>

            <SignUpForm />
        </div>
    )
}
export default SignIn;