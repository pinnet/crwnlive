/**
 * @file Provides the CartItemsContext and CartItemsProvider components for managing cart items.
 * @module cart.context
 * @requires react
 */
/*
 * Created on Sat Dec 09 2023
 *
 * Copyright (c) 2023 dannyarnold.com
 * Author: Danny Arnold
 */
import { createContext, useReducer } from 'react';

export const CART_ACTION_TYPES = {
    UPDATE_CART: 'UPDATE_CART',
    IS_CART_VISABLE: 'IS_CART_VISABLE'
  }
  
  const cartReducer = (state,action) => {
  
    const { type, payload } = action;
    console.log('cartReducer', type, payload);
    switch(type) {
        case CART_ACTION_TYPES.UPDATE_CART:
            return {
                ...state,
                ...payload
            };
        case CART_ACTION_TYPES.IS_CART_VISABLE:
            return {
                ...state,
                isCartOpen: payload
            };        
      default:
        throw new Error(`Unhandled action type: ${type}`);
    }
  
  }
const INITIAL_STATE = {
    cartItems: [],
    quantity: 0,
    cartTotal: 0
};
const addItemToCartItems = (cartItems, itemToAdd) => {
    const existingCartItem = cartItems.find(item => item.id === itemToAdd.id);
    if (existingCartItem) {
        return cartItems.map(item => {
            return (item.id === itemToAdd.id) ? 
            { ...item, quantity: item.quantity + 1, itemTotal: item.price * (item.quantity + 1) } : 
            item
        });
    }
    else {
        return [...cartItems, { ...itemToAdd, quantity: 1, itemTotal: itemToAdd.price }];
    }
};
const removeItemFromCartItems = (cartItems, itemToRemove) => {
    const existingCartItem = cartItems.find(item => item.id === itemToRemove.id);
    if (existingCartItem.quantity === 1) {
        return cartItems.filter(item => item.id !== itemToRemove.id);
    }
    else {
        return cartItems.map(item => {
            return (item.id === itemToRemove.id) ? 
            { ...item, quantity: item.quantity - 1, itemTotal: item.price * (item.quantity - 1) } : 
            item
        });
    }
};

/**
 * Context object for managing the cart.
 * @type {object}
 * @property {Array} items - The array of cart items.
 * @property {Function} setItems - The function to update the cart items.
 */
export const CartContext = createContext({
    isCartOpen: false,
    cartItems: [],
    quanty: 0,
    cartTotal: 0
});

/**
 * Provider component for the CartContext.
 * @param {object} props - The component props.
 * @param {ReactNode} props.children - The child components.
 * @returns {JSX.Element} The rendered JSX element.
 */
export const CartProvider = ({ children }) => {
  
    const[ { isCartOpen, cartItems, quantity, cartTotal } , dispatch ] = useReducer(cartReducer, INITIAL_STATE);

    const updateCartItemsReducer = (newCartItems) => {
        
        const newQuantity = newCartItems.reduce((accumulatedQuantity, cartItem) => 
            accumulatedQuantity + cartItem.quantity, 0);
        const newCartTotal = newCartItems.reduce((accumulatedTotal, cartItem) => 
            accumulatedTotal + cartItem.itemTotal, 0);
        dispatch({
            type: CART_ACTION_TYPES.UPDATE_CART,
            payload: {
                cartItems: newCartItems,
                quantity: newQuantity,
                cartTotal: newCartTotal
            }
        });
    } 
    const addItemToCart = (item) => {
        const newCartItems = addItemToCartItems(cartItems, item);
        updateCartItemsReducer(newCartItems);
    }
    const removeItemFromCart = (item) => {
        const newCartItems = removeItemFromCartItems(cartItems, item);
        updateCartItemsReducer(newCartItems);
    }
    const removeAllFromCart = (item) => {
        const newCartItems = cartItems.filter(cartItem => cartItem.id !== item.id);
        updateCartItemsReducer(newCartItems);
    }
    const clearCart = () => {
        const newCartItems = [];
        updateCartItemsReducer(newCartItems);
    }

    const setCartVisable = (visable) => {
        console.log('setCartVisable', visable);
        dispatch({
            type: CART_ACTION_TYPES.IS_CART_VISABLE,
            payload: visable
        });
    }   
    return (
        <CartContext.Provider value={{ 
            isCartOpen,
            quantity,
            cartTotal,
            cartItems,
            setCartVisable,
            addItemToCart,
            removeItemFromCart,
            removeAllFromCart,
            clearCart,
        }}>{children}</CartContext.Provider>
    );
}
