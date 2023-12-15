import { takeLatest, all, put, call } from 'redux-saga/effects';

import { signInWithEmailAndPasswordAuth,
         signInWithGooglePopUp,
         signUserOut,
         getCurrentUser,
         createUserDocumentFromAuth,
         createAuthUserFromEmailAndPassword 
  } from '../../utils/firebase/firebase.utils';

import { USER_ACTION_TYPES } from './user.types';
import { 
    authSuccess,
    authFailure,
    signOutSuccess,
    signUpUserSuccess, 
  } from './user.actions';


  export function* signOut() {
    try {
      yield call(signUserOut);
      yield put(signOutSuccess());
    } catch (error) {
      yield put(authFailure(error));
    }
  }
export function* signInAfterSignUp({ payload: { user, additionalData } }) {
  yield call(getSnapshotFromUserAuth, user, additionalData);
}

export function* signUpUser({ payload: {  email, password, displayName } }) {
  try {
    const { user } = yield call(createAuthUserFromEmailAndPassword, email, password);
    yield put(signUpUserSuccess(user,{ displayName }));
  } catch (error) {
    yield put(authFailure(error));
  }
}

export function* isUserAuthenticated() {
  try {
    const userAuth = yield call(getCurrentUser);
    if (!userAuth) return;
    yield call(getSnapshotFromUserAuth, userAuth);
  } catch (error) {
    yield put(authFailure(error));
  }
}

export function* getSnapshotFromUserAuth(userAuth, additionalData) {
  try {
    const userSnapshot = yield call(createUserDocumentFromAuth, userAuth, additionalData);
    yield put(authSuccess({ id: userSnapshot.id, ...userSnapshot.data() }));
  } catch (error) {
    yield put(authFailure(error));
  }
}


export function* signInWithGoogle() {
  try {
    const { user } = yield call(signInWithGooglePopUp);
    yield call(getSnapshotFromUserAuth, user);
    yield put(authSuccess(user));
  } catch (error) {
    yield put(authFailure(error));
  }
}

export function* signInWithEmail({ payload: { email, password } }) {
  try {
    const { user } = yield call(signInWithEmailAndPasswordAuth, email, password);
    yield call(getSnapshotFromUserAuth, user);
    yield put(authSuccess(user));
  } catch (error) {
    yield put(authFailure(error));
  }
}
export function* onSignUpUserStart() {
  yield takeLatest(USER_ACTION_TYPES.SIGN_UP_START, signUpUser);
}
export function* onCheckUserSession() {
  yield takeLatest(USER_ACTION_TYPES.CHECK_USER_SESSION, isUserAuthenticated);
}
export function* onSignUpSuccess() {
  yield takeLatest(USER_ACTION_TYPES.SIGN_UP_SUCCESS, signInAfterSignUp);
}
export function* onGoogleSignInStart() {
  yield takeLatest(USER_ACTION_TYPES.GOOGLE_SIGN_IN_START, signInWithGoogle);
}
export function* onEmailSignInStart() {
  yield takeLatest(USER_ACTION_TYPES.EMAIL_SIGN_IN_START, signInWithEmail);
}
export function* onSignOutStart() {
  yield takeLatest(USER_ACTION_TYPES.SIGN_OUT_START, signOut);
}

export function* userSagas() {
  yield all([
    call(onCheckUserSession),
    call(onGoogleSignInStart),
    call(onEmailSignInStart),
    call(onSignOutStart),
    call(onSignUpUserStart),
    call(onSignUpSuccess)
  ]);
}
 
