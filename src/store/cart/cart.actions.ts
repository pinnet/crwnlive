/**
 * @file cart.actions.js
 * @created Mon Dec 11 2023
 * @copyright Copyright (c) 2023 dannyarnold.com
 * @author Danny Arnold
 **/
import {
    createAction,
    withMatcher,
    ActionWithPayload,
} from '../../utils/reducer/reducer.utils';
import { CategoryItem } from '../categories/categories.types';
import {
    addItemToCartItems,
    removeItemFromCartItems,
} from '../../utils/cart/cart.actions.utils';
import { CART_ACTION_TYPES, CartItem } from './cart.types';

export type SetCartItemsAction = ActionWithPayload<
    CART_ACTION_TYPES.SET_CART_ITEMS,
    CartItem[]
>;
export type SetCartOpenAction = ActionWithPayload<
    CART_ACTION_TYPES.SET_CART_OPEN,
    boolean
>;

export const setCartItems = withMatcher(
    (cartItems: CartItem[]): SetCartItemsAction => {
        return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, cartItems);
    }
);
export const addItemToCart = (
    cartItems: CartItem[],
    item: CategoryItem
): SetCartItemsAction => {
    const newCartItems = addItemToCartItems(cartItems, item);
    return setCartItems(newCartItems);
};
export const removeItemFromCart = (
    cartItems: CartItem[],
    item: CategoryItem
): SetCartItemsAction => {
    const newCartItems = removeItemFromCartItems(cartItems, item);
    return setCartItems(newCartItems);
};
export const removeAllFromCart = (
    cartItems: CartItem[],
    item: CategoryItem
): SetCartItemsAction => {
    const newCartItems = cartItems.filter(
        (cartItem) => cartItem.id !== item.id
    );
    return setCartItems(newCartItems);
};
export const clearCart = (): SetCartItemsAction => {
    const emptyCart: CartItem[] = [];
    return setCartItems(emptyCart);
};

export const setCartOpen = withMatcher((isOpen: boolean): SetCartOpenAction => {
    return createAction(CART_ACTION_TYPES.SET_CART_OPEN, isOpen);
});
