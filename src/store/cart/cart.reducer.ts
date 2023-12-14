/**
 * @file cart.reducer.js
 * @created Mon Dec 11 2023
 * @copyright Copyright (c) 2023 dannyarnold.com
 * @author Danny Arnold
 **/
import { AnyAction } from 'redux';
import { CartItem } from './cart.types';

export type CartState = {
    cartItems: CartItem[];
    cartCount: number;
    cartTotal: number;
    cartOpen: boolean;
};

const INITIAL_STATE: CartState = {
    cartItems: [],
    cartCount: 0,
    cartTotal: 0,
    cartOpen: false,
};

export const cartReducer = (
    state = INITIAL_STATE,
    action = {} as AnyAction
) => {
    if (action.type === 'cart/SET_CART_ITEMS') {
        return {
            ...state,
            cartItems: action.payload,
        };
    }
    if (action.type === 'cart/SET_CART_OPEN') {
        return {
            ...state,
            cartOpen: action.payload,
        };
    }

    return state;
};
