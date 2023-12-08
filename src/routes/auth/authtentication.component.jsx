
import { useEffect, Fragment } from 'react';
import { getRedirectResult } from 'firebase/auth';
import { auth, createUserDocumentFromGoogleAuth } from '../../utils/firebase.utils';
import './authentication.styles.scss';
import SignUpForm from '../../components/sign-up-form/sign-up-form.component';
import SignInForm from '../../components/sign-in-form/sign-in-form.component';

/**
 * Renders the Authentication component.
 * 
 * @returns {JSX.Element} The rendered Authentication component.
 */
const Authentication = () => {

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

    return (
        <Fragment>
            <h2>Sign In</h2>
            <div className='auth-container'>
                <SignInForm />
                <SignUpForm />
            </div>
        </Fragment>
    )
}
export default Authentication;