import { takeLatest, all, put, call } from 'typed-redux-saga/macro';
import { User } from 'firebase/auth';
import {
    signInWithEmailAndPasswordAuth,
    signInWithGooglePopUp,
    signUserOut,
    getCurrentUser,
    createUserDocumentFromAuth,
    createAuthUserFromEmailAndPassword,
    AdditionalData,
} from '../../utils/firebase/firebase.utils';

import { USER_ACTION_TYPES } from './user.types';
import {
    authSuccess,
    authFailure,
    signOutSuccess,
    signUpUserSuccess,
    EmailSignInStart,
    SignUpUserSuccess,
    SignUpUserStart,
} from './user.actions';

export function* getSnapshotFromUserAuth(
    userAuth: User,
    additionalData?: AdditionalData
) {
    try {
        const userSnapshot = yield* call(
            createUserDocumentFromAuth,
            userAuth,
            additionalData
        );
        if (userSnapshot) {
            yield* put(
                authSuccess({ id: userSnapshot.id, ...userSnapshot.data() })
            );
        }
    } catch (error) {
        yield* put(authFailure(error as Error));
    }
}

export function* signInWithGoogle() {
    try {
        const { user } = yield* call(signInWithGooglePopUp);
        yield* call(getSnapshotFromUserAuth, user);
    } catch (error) {
        yield* put(authFailure(error as Error));
    }
}
export function* signInWithEmail({
    payload: { email, password },
}: EmailSignInStart) {
    try {
        const userCredential = yield* call(
            signInWithEmailAndPasswordAuth,
            email,
            password
        );
        if (userCredential) {
            const { user } = userCredential;
            yield* call(getSnapshotFromUserAuth, user);
        }
    } catch (error) {
        yield* put(authFailure(error as Error));
    }
}
export function* signOut() {
    try {
        yield* call(signUserOut);
        yield* put(signOutSuccess());
    } catch (error) {
        yield* put(authFailure(error as Error));
    }
}
export function* signInAfterSignUp({
    payload: { user, additionalData },
}: SignUpUserSuccess) {
    yield* call(getSnapshotFromUserAuth, user, additionalData);
}

export function* signUpUser({
    payload: { email, password, displayName },
}: SignUpUserStart) {
    try {
        const userCredential = yield* call(
            createAuthUserFromEmailAndPassword,
            email,
            password
        );

        if (userCredential) {
            const { user } = userCredential;
            yield* put(signUpUserSuccess(user, { displayName }));
        }
    } catch (error) {
        yield* put(authFailure(error as Error));
    }
}
export function* isUserAuthenticated() {
    try {
        const userAuth = yield* call(getCurrentUser);
        if (userAuth) {
            yield* call(getSnapshotFromUserAuth, userAuth);
        }
    } catch (error) {
        yield* put(authFailure(error as Error));
    }
}

export function* onSignUpUserStart() {
    yield* takeLatest(USER_ACTION_TYPES.SIGN_UP_START, signUpUser);
}
export function* onCheckUserSession() {
    yield* takeLatest(
        USER_ACTION_TYPES.CHECK_USER_SESSION,
        isUserAuthenticated
    );
}
export function* onSignUpSuccess() {
    yield* takeLatest(USER_ACTION_TYPES.SIGN_UP_SUCCESS, signInAfterSignUp);
}
export function* onGoogleSignInStart() {
    yield* takeLatest(USER_ACTION_TYPES.GOOGLE_SIGN_IN_START, signInWithGoogle);
}
export function* onEmailSignInStart() {
    yield* takeLatest(USER_ACTION_TYPES.EMAIL_SIGN_IN_START, signInWithEmail);
}
export function* onSignOutStart() {
    yield* takeLatest(USER_ACTION_TYPES.SIGN_OUT_START, signOut);
}

export function* userSagas() {
    yield* all([
        call(onCheckUserSession),
        call(onGoogleSignInStart),
        call(onEmailSignInStart),
        call(onSignOutStart),
        call(onSignUpUserStart),
        call(onSignUpSuccess),
    ]);
}
