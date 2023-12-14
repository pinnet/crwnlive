/**
 * @file user.actions.js
 * @created Mon Dec 11 2023
 * @copyright Copyright (c) 2023 dannyarnold.com
 * @author Danny Arnold
 **/
import { UserData, AdditionalData } from '../../utils/firebase/firebase.utils';
import {
    createAction,
    Action,
    ActionWithPayload,
    withMatcher,
} from '../../utils/reducer/reducer.utils';

import { USER_ACTION_TYPES } from './user.types';

export type SetCurrentUser = ActionWithPayload<
    USER_ACTION_TYPES.SET_CURRENT_USER,
    UserData | null
>;
export const setCurrentUser = withMatcher(
    (user: UserData | null): SetCurrentUser => {
        return createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user);
    }
);

export type CheckUserSession = Action<USER_ACTION_TYPES.CHECK_USER_SESSION>;
export const checkUserSession = withMatcher((): CheckUserSession => {
    return createAction(USER_ACTION_TYPES.CHECK_USER_SESSION);
});

export type GoogleSignInStart = Action<USER_ACTION_TYPES.GOOGLE_SIGN_IN_START>;
export const googleSignInStart = withMatcher((): GoogleSignInStart => {
    return createAction(USER_ACTION_TYPES.GOOGLE_SIGN_IN_START);
});

export type SignUpUserStart = Action<USER_ACTION_TYPES.SIGN_UP_START>;
export const signUpUserStart = withMatcher(
    (email: string, password: string, displayName: string): SignUpUserStart => {
        return createAction(USER_ACTION_TYPES.SIGN_UP_START, {
            email,
            password,
            displayName,
        });
    }
);
export type SignOutStart = Action<USER_ACTION_TYPES.SIGN_OUT_START>;
export const signOutStart = withMatcher((): SignOutStart => {
    return createAction(USER_ACTION_TYPES.SIGN_OUT_START);
});

export type SignOutSuccess = Action<USER_ACTION_TYPES.SIGN_OUT_SUCCESS>;
export const signOutSuccess = withMatcher((): SignOutSuccess => {
    return createAction(USER_ACTION_TYPES.SIGN_OUT_SUCCESS);
});

export type EmailSignInStart = ActionWithPayload<
    USER_ACTION_TYPES.EMAIL_SIGN_IN_START,
    { email: string; password: string }
>;
export const emailSignInStart = withMatcher(
    (email: string, password: string): EmailSignInStart => {
        return createAction(USER_ACTION_TYPES.EMAIL_SIGN_IN_START, {
            email,
            password,
        });
    }
);

export type SignUpUserSuccess = ActionWithPayload<
    USER_ACTION_TYPES.SIGN_UP_SUCCESS,
    { user: UserData; additionalData: AdditionalData }
>;
export const signUpUserSuccess = withMatcher(
    (user: UserData, additionalData: AdditionalData): SignUpUserSuccess => {
        return createAction(USER_ACTION_TYPES.SIGN_UP_SUCCESS, {
            user,
            additionalData,
        });
    }
);

export type AuthSuccess = ActionWithPayload<
    USER_ACTION_TYPES.AUTH_SUCCESS,
    UserData
>;
export const authSuccess = withMatcher((user: UserData): AuthSuccess => {
    return createAction(USER_ACTION_TYPES.AUTH_SUCCESS, user);
});

export type AuthFailure = ActionWithPayload<
    USER_ACTION_TYPES.AUTH_FAILURE,
    Error
>;
export const authFailure = withMatcher((error: Error): AuthFailure => {
    return createAction(USER_ACTION_TYPES.AUTH_FAILURE, error);
});
