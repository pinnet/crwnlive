/**
 * @file user.actions.js
 * @created Mon Dec 11 2023
 * @copyright Copyright (c) 2023 dannyarnold.com
 * @author Danny Arnold
 **/

import { createAction } from '../../utils/reducer/reducer.utils';
import { USER_ACTION_TYPES } from './user.types';

export const signUpUserStart = ( email, password, displayName ) => {
  return createAction(USER_ACTION_TYPES.SIGN_UP_START, { email, password, displayName });
}
export const signUpUserSuccess = (user) => {
  return createAction(USER_ACTION_TYPES.SIGN_UP_SUCCESS, user);
}
export const signUpUserFailure = (error) => {
  return createAction(USER_ACTION_TYPES.SIGN_UP_FAILURE, error);
}

export const checkUserSession = () => {
  return createAction(USER_ACTION_TYPES.CHECK_USER_SESSION);
}

export const googleSignInStart = () => {
  return createAction(USER_ACTION_TYPES.GOOGLE_SIGN_IN_START);
}

export const emailSignInStart = (email,password) => {
  return createAction(USER_ACTION_TYPES.EMAIL_SIGN_IN_START, {email,password});
}

export const signInSuccess = (user) => {
  return createAction(USER_ACTION_TYPES.SIGN_IN_SUCCESS, user);
}

export const signInFailure = (error) => {
  return createAction(USER_ACTION_TYPES.SIGN_IN_FAILURE, error);
}

export const signOutStart = () => {
  return createAction(USER_ACTION_TYPES.SIGN_OUT_START);
}

export const signOutSuccess = () => {
  return createAction(USER_ACTION_TYPES.SIGN_OUT_SUCCESS);
}

export const signOutFailure = (error) => {
  return createAction(USER_ACTION_TYPES.SIGN_OUT_FAILURE, error);
}