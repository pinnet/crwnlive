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
        
      case USER_ACTION_TYPES.SIGN_UP_START:
      case USER_ACTION_TYPES.GOOGLE_SIGN_IN_START:
      case USER_ACTION_TYPES.EMAIL_SIGN_IN_START:
      case USER_ACTION_TYPES.SIGN_OUT_START:
        return {
          ...state,
          inAuthFlow: true
        }
      case USER_ACTION_TYPES.SIGN_UP_SUCCESS:  
      case USER_ACTION_TYPES.SIGN_IN_SUCCESS:
        return {
          ...state,
          currentUser: payload,
          inAuthFlow: false,
          authError: null,
        }
      case USER_ACTION_TYPES.SIGN_UP_FAILURE:
      case USER_ACTION_TYPES.SIGN_IN_FAILURE:
      case USER_ACTION_TYPES.SIGN_OUT_FAILURE:
        return {
          ...state,
          inAuthFlow: false,
          authError: payload
        }
      case USER_ACTION_TYPES.SIGN_OUT_SUCCESS:
        return {
          ...state,
          currentUser: null,
          inAuthFlow: false,
          authError: null
        }
      default:
        return state;
    }
  
  }
  const INITIAL_STATE = {
    currentUser: null,
    inAuthFlow: false,
    authError: null
  };