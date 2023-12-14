/**
 * @file cart.reducer.js
 * @created Mon Dec 11 2023
 * @copyright Copyright (c) 2023 dannyarnold.com
 * @author Danny Arnold
 **/
import { CART_ACTION_TYPES } from './cart.types';
  
export const cartReducer = ( state = INITIAL_STATE, action) => {
  
    const { type, payload } = action;
    switch(type) {
        case CART_ACTION_TYPES.SET_CART_ITEMS:
            return {
                ...state,
                cartItems: payload
            };
        case CART_ACTION_TYPES.SET_CART_OPEN:
            return {
                ...state,
                cartOpen: payload
            };       
      default:
        return state;
    }
  }
const INITIAL_STATE = {
    cartItems: [],
    cartCount: 0,
    cartTotal: 0,
    cartOpen: false
};