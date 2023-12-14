/**
 * @file user.types.ts
 * @created Thu Dec 14 2023
 * @copyright Copyright (c) 2023 dannyarnold.com
 * @author Danny Arnold
 **/

export enum USER_ACTION_TYPES {
    CHECK_USER_SESSION = 'user/CHECK_USER_SESSION',
    GOOGLE_SIGN_IN_START = 'user/GOOGLE_SIGN_IN_START',
    EMAIL_SIGN_IN_START = 'user/EMAIL_SIGN_IN_START',
    SIGN_IN_SUCCESS = 'user/SIGN_IN_SUCCESS',
    SIGN_IN_FAILURE = 'user/SIGN_IN_FAILURE',
    SIGN_OUT_START = 'user/SIGN_OUT_START',
    SIGN_OUT_SUCCESS = 'user/SIGN_OUT_SUCCESS',
    SIGN_OUT_FAILURE = 'user/SIGN_OUT_FAILURE',
    SIGN_UP_START = 'user/CREATE_USER_START',
    SIGN_UP_SUCCESS = 'user/CREATE_USER_SUCCESS',
    SIGN_UP_FAILURE = 'user/CREATE_USER_FAILURE',
}

export type UserType = {
    id: string;
    displayName: string;
    email: string;
    createdAt: Date;
};
