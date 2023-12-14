/**
 * @file user.types.ts
 * @created Thu Dec 14 2023
 * @copyright Copyright (c) 2023 dannyarnold.com
 * @author Danny Arnold
 **/
import { UserData, AdditionalData } from '../../utils/firebase/firebase.utils';

export enum USER_ACTION_TYPES {
    SET_CURRENT_USER = 'user/SET_CURRENT_USER',
    CHECK_USER_SESSION = 'user/CHECK_USER_SESSION',
    GOOGLE_SIGN_IN_START = 'user/GOOGLE_SIGN_IN_START',
    EMAIL_SIGN_IN_START = 'user/EMAIL_SIGN_IN_START',
    AUTH_SUCCESS = 'user/AUTH_SUCCESS',
    AUTH_FAILURE = 'user/AUTH_FAILURE',
    SIGN_OUT_START = 'user/SIGN_OUT_START',
    SIGN_OUT_SUCCESS = 'user/SIGN_OUT_SUCCESS',
    SIGN_UP_START = 'user/CREATE_USER_START',
    SIGN_UP_SUCCESS = 'user/CREATE_USER_SUCCESS',
}

export type SignUpFlow = {
    user: UserData;
    additionalData: AdditionalData;
};
