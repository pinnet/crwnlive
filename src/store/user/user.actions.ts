/**
 * @file user.actions.js
 * @created Mon Dec 11 2023
 * @copyright Copyright (c) 2023 dannyarnold.com
 * @author Danny Arnold
 **/

import {
    createAction,
    Action,
    ActionWithPayload,
} from '../../utils/reducer/reducer.utils';

import { USER_ACTION_TYPES, UserType } from './user.types';

export type CheckUserSession = Action<USER_ACTION_TYPES.CHECK_USER_SESSION>;

export type SignUpUserStart = Action<USER_ACTION_TYPES.SIGN_UP_START>;
export type SignOutStart = Action<USER_ACTION_TYPES.SIGN_OUT_START>;
export type SignOutSuccess = Action<USER_ACTION_TYPES.SIGN_OUT_SUCCESS>;
export type GoogleSignInStart = Action<USER_ACTION_TYPES.GOOGLE_SIGN_IN_START>;

export type EmailSignInStart = ActionWithPayload<
    USER_ACTION_TYPES.EMAIL_SIGN_IN_START,
    UserType
>;
export type SignUpUserSuccess = ActionWithPayload<
    USER_ACTION_TYPES.SIGN_UP_SUCCESS,
    UserType
>;
export type SignInSuccess = ActionWithPayload<
    USER_ACTION_TYPES.SIGN_IN_SUCCESS,
    UserType
>;

export type SignOutFailure = ActionWithPayload<
    USER_ACTION_TYPES.SIGN_OUT_FAILURE,
    Error
>;
export type SignUpUserFailure = ActionWithPayload<
    USER_ACTION_TYPES.SIGN_UP_FAILURE,
    Error
>;
export type SignInFailure = ActionWithPayload<
    USER_ACTION_TYPES.SIGN_IN_FAILURE,
    Error
>;

export type UserAction =
    | SignUpUserStart
    | SignUpUserSuccess
    | SignUpUserFailure
    | EmailSignInStart
    | SignInSuccess
    | SignOutStart
    | SignOutSuccess
    | SignOutFailure
    | GoogleSignInStart
    | SignInFailure
    | CheckUserSession;

export const checkUserSession = (): CheckUserSession => {
    return createAction(USER_ACTION_TYPES.CHECK_USER_SESSION);
};
export const signUpUserStart = (
    email: string,
    password: string,
    displayName: string
): SignUpUserStart => {
    return createAction(USER_ACTION_TYPES.SIGN_UP_START, {
        email,
        password,
        displayName,
    });
};
export const signUpUserSuccess = (
    user: UserType,
    additionalData = {}
): SignUpUserSuccess => {
    return createAction(USER_ACTION_TYPES.SIGN_UP_SUCCESS, {
        user,
        additionalData,
    });
};
export const emailSignInStart = (email, password): EmailSignInStart => {
    return createAction(USER_ACTION_TYPES.EMAIL_SIGN_IN_START, {
        email,
        password,
    });
};
export const signInSuccess = (user): SignInSuccess => {
    return createAction(USER_ACTION_TYPES.SIGN_IN_SUCCESS, user);
};
export const signOutStart = (): SignOutStart => {
    return createAction(USER_ACTION_TYPES.SIGN_OUT_START);
};
export const signOutSuccess = (): SignOutSuccess => {
    return createAction(USER_ACTION_TYPES.SIGN_OUT_SUCCESS);
};
export const googleSignInStart = (): GoogleSignInStart => {
    return createAction(USER_ACTION_TYPES.GOOGLE_SIGN_IN_START);
};
export const signInFailure = (error: Error): SignInFailure => {
    return createAction(USER_ACTION_TYPES.SIGN_IN_FAILURE, error);
};
export const signUpUserFailure = (error: Error): SignUpUserFailure => {
    return createAction(USER_ACTION_TYPES.SIGN_UP_FAILURE, error);
};
export const signOutFailure = (error: Error): SignOutFailure => {
    return createAction(USER_ACTION_TYPES.SIGN_OUT_FAILURE, error);
};
