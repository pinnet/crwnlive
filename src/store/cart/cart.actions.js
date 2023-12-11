/**
 * @file cart.actions.js
 * @created Mon Dec 11 2023
 * @copyright Copyright (c) 2023 dannyarnold.com
 * @author Danny Arnold
 **/
import { createAction } from '../../utils/reducer/reducer.utils';
import { addItemToCartItems, removeItemFromCartItems } from '../../utils/cart/cart.actions.utils';
import { CART_ACTION_TYPES } from './cart.types';

export const setCartOpen = (open) => {
  return createAction(CART_ACTION_TYPES.SET_CART_OPEN,open);
}
export const addItemToCart = (currentState, item) => {
  const newCartItems = addItemToCartItems(currentState, item);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS,newCartItems);
}
export const removeItemFromCart = (currentState,item) => {
  const newCartItems = removeItemFromCartItems(currentState, item);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS,newCartItems);
}
export const removeAllFromCart = (currentState,item) => {
  const newCartItems = currentState.filter(cartItem => cartItem.id !== item.id);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS,newCartItems);
}
export const clearCart = () => {
  const newCartItems = [];
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS,newCartItems);
}