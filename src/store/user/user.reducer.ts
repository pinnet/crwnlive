/**
 * @file user.reducer.ts
 * @created Mon Dec 11 2023
 * @copyright Copyright (c) 2023 dannyarnold.com
 * @author Danny Arnold
 **/
import { AnyAction } from 'redux';
import { USER_ACTION_TYPES, UserType } from './user.types';
import {
    authSuccess,
    authFailure,
    signOutStart,
    signOutSuccess,
    checkUserSession,
    googleSignInStart,
    emailSignInStart,
    signUpUserSuccess,
    signUpUserStart,
} from './user.actions';

export type UserState = {
    currentUser: UserType | null;
    inAuthFlow: boolean;
    authError: Error | null;
};
const INITIAL_STATE: UserState = {
    currentUser: null,
    inAuthFlow: false,
    authError: null,
};

export const userReducer = (
    state = INITIAL_STATE,
    action = {} as AnyAction
) => {
    if (checkUserSession.match(action)) {
        return {
            ...state,
            inAuthFlow: true,
        };
    }
    if (authSuccess.match(action)) {
        return {
            ...state,
            currentUser: action.payload,
            inAuthFlow: false,
            authError: null,
        };
    }
    if (authFailure.match(action)) {
        return {
            ...state,
            authError: action.payload,
            inAuthFlow: false,
        };
    }
    if (signOutStart.match(action)) {
        return {
            ...state,
            inAuthFlow: true,
        };
    }
    if (signOutSuccess.match(action)) {
        return {
            ...state,
            currentUser: null,
            inAuthFlow: false,
        };
    }
    if (googleSignInStart.match(action)) {
        return {
            ...state,
            inAuthFlow: true,
        };
    }
    if (emailSignInStart.match(action)) {
        return {
            ...state,
            inAuthFlow: true,
        };
    }
    if (signUpUserStart.match(action)) {
        return {
            ...state,
            inAuthFlow: true,
        };
    }
    if (signUpUserSuccess.match(action)) {
        return {
            ...state,
            currentUser: action.payload,
            inAuthFlow: false,
            authError: null,
        };
    }
    return state;
};
