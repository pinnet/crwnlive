/**
 * @file user.actions.js
 * @created Mon Dec 11 2023
 * @copyright Copyright (c) 2023 dannyarnold.com
 * @author Danny Arnold
 **/
import { createAction } from '../../utils/reducer/reducer.utils';
import { USER_ACTION_TYPES } from './user.types';

export const setCurrentUser = (user) => {  
  return createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user);
}