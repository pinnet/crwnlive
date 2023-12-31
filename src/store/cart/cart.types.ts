/**
 * @file cart.types.js
 * @created Mon Dec 11 2023
 * @copyright Copyright (c) 2023 dannyarnold.com
 * @author Danny Arnold
 **/

import { CategoryItem } from '../categories/categories.types';

export enum CART_ACTION_TYPES {
    SET_CART_ITEMS = 'cart/SET_CART_ITEMS',
    SET_CART_OPEN = 'cart/SET_CART_OPEN',
}

export type CartItem = CategoryItem & {
    quantity: number;
    itemTotal: number;
};
