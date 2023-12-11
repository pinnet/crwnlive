/**
 * @file categories.actions.js
 * @created Mon Dec 11 2023
 * @copyright Copyright (c) 2023 dannyarnold.com
 * @author Danny Arnold
 **/

import { createAction } from '../../utils/reducer/reducer.utils';
import { CATEGORIES_ACTION_TYPES } from './categories.types';

export const setCategories = (categories) => {  
  return createAction(CATEGORIES_ACTION_TYPES.SET_CATEGORIES, categories);
}