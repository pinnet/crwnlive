/**
 * @file cart.selector.js
 * @created Mon Dec 11 2023
 * @copyright Copyright (c) 2023 dannyarnold.com
 * @author Danny Arnold
 **/
import { createSelector } from 'reselect'; 

const selectCartReducer = (state) => state.cart;

export const selectCartOpen = createSelector(
    [selectCartReducer],
    (cart) => cart.cartOpen
);  
export const selectCartItems = createSelector(
    [selectCartReducer],
    (cart) => cart.cartItems
);
export const selectCartItemsCount = createSelector(
    [selectCartItems],
    (cartItems) => cartItems.reduce((accumulatedQuantity, cartItem) => 
            accumulatedQuantity + cartItem.quantity, 0)
);
export const selectCartTotal = createSelector(
    [selectCartItems],
    (cartItems) => cartItems.reduce((accumulatedTotal, cartItem) => 
            accumulatedTotal + cartItem.itemTotal, 0)
);
