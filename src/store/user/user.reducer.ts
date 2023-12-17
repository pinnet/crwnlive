/**
 * @file user.reducer.ts
 * @created Mon Dec 11 2023
 * @copyright Copyright (c) 2023 dannyarnold.com
 * @author Danny Arnold
 **/
import { AnyAction } from 'redux';
import { UserData } from '../../utils/firebase/firebase.utils';
import { authSuccess, authFailure, signOutSuccess } from './user.actions';

export type UserState = {
    readonly currentUser: UserData | null;
    readonly authError: Error | null;
};
const INITIAL_STATE: UserState = {
    currentUser: null,
    authError: null,
};

export const userReducer = (
    state = INITIAL_STATE,
    action = {} as AnyAction
) => {
    if (authSuccess.match(action)) {
        return {
            ...state,
            currentUser: action.payload,
            authError: null,
        };
    }
    if (authFailure.match(action)) {
        return {
            ...state,
            authError: action.payload,
        };
    }
    if (signOutSuccess.match(action)) {
        return {
            ...state,
            currentUser: null,
            authError: null,
        };
    }
    return state;
};
