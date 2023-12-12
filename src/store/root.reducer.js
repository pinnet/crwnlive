/**
*  @file root.reducer.js
*  @created Mon Dec 11 2023
*  @copyright Copyright (c) 2023 dannyarnold.com
*  @author Danny Arnold
 **/
import { combineReducers } from 'redux';
import { userReducer } from './user/user.reducer';
import { categoriesReducer } from './categories/categories.reducer';
import { cartReducer } from './cart/cart.reducer';


/**
 * Root reducer function that combines multiple reducers into a single reducer.
 * @param {Object} state - The current state of the application.
 * @param {Object} action - The action object that describes the state change.
 * @returns {Object} - The new state of the application.
 */
export const rootReducer = combineReducers({
    user: userReducer,
    categories: categoriesReducer,
    cart: cartReducer
    });