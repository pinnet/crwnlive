/**
 * @file cart.reducer.js
 * @created Mon Dec 11 2023
 * @copyright Copyright (c) 2023 dannyarnold.com
 * @author Danny Arnold
 **/
import { AnyAction } from 'redux';
import { CartItem } from './cart.types';
import { setCartItems, setCartOpen } from './cart.actions';

export type CartState = {
    readonly cartItems: CartItem[];
    readonly cartCount: number;
    readonly cartTotal: number;
    readonly cartOpen: boolean;
};

const INITIAL_STATE: CartState = {
    cartItems: [],
    cartCount: 0,
    cartTotal: 0,
    cartOpen: false,
};

export const cartReducer = (
    state = INITIAL_STATE,
    action: AnyAction
): CartState => {
    if (setCartItems.match(action)) {
        return {
            ...state,
            cartItems: action.payload,
        };
    }
    if (setCartOpen.match(action)) {
        return {
            ...state,
            cartOpen: action.payload,
        };
    }

    return state;
};
