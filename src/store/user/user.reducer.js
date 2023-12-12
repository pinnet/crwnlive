/**
 * @file user.reducer.js
 * @created Mon Dec 11 2023
 * @copyright Copyright (c) 2023 dannyarnold.com
 * @author Danny Arnold
 **/

import { USER_ACTION_TYPES } from './user.types';

export const userReducer = (state = INITIAL_STATE, action) => {
  
    const { type, payload } = action;
    switch(type) {
      case USER_ACTION_TYPES.CREATE_USER_START:
        return {
          ...state,
          isCreatingUser: true
        }
      case USER_ACTION_TYPES.CREATE_USER_FAILURE:
        return {
          ...state,
          isCreatingUser: false,
          createUserError: payload
        }
      case USER_ACTION_TYPES.CREATE_USER_SUCCESS:
      case USER_ACTION_TYPES.GOOGLE_SIGN_IN_START:
      case USER_ACTION_TYPES.EMAIL_SIGN_IN_START:
        return {
          ...state,
          isSigningIn: true
        }
      case USER_ACTION_TYPES.SIGN_IN_SUCCESS:
        return {
          ...state,
          currentUser: payload,
          isSigningIn: false,
          signInError: null,
          createUserError: null,
          isCreatingUser: false
        }
      case USER_ACTION_TYPES.SIGN_IN_FAILURE:
        return {
          ...state,
          isSigningIn: false,
          signInError: payload
        }
      case USER_ACTION_TYPES.SIGN_OUT_START:
        return {
          ...state,
          isSigningOut: true
        }
      case USER_ACTION_TYPES.SIGN_OUT_SUCCESS:
        return {
          ...state,
          currentUser: null,
          isSigningOut: false,
          signOutError: null
        }
      case USER_ACTION_TYPES.SIGN_OUT_FAILURE:
        return {
          ...state,
          isSigningOut: false,
          signOutError: payload
        }
      default:
        return state;
    }
  
  }
  const INITIAL_STATE = {
    currentUser: null,
    isSigningIn: false,
    signInError: null,
    isSigningOut: false,
    signOutError: null,
    isCreatingUser: false,
    createUserError: null
  };