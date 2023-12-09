/**
 * @file cart-icon.component.jsx
 * @module CartIcon
 * @desc Represents a cart icon component.
 * @requires React
 * @requires cart-icon.styles.scss
 * @requires shopping-bag.svg
 */
/*
 * Created on Sat Dec 09 2023
 *
 * Copyright (c) 2023 dannyarnold.com
 * Author: Danny Arnold
 */

import './cart-icon.styles.scss';
import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

/**
 * Represents a cart icon component.
 * @component
 * @returns {JSX.Element} The JSX element representing the cart icon.
 */
const CartIcon = () => {
    const { isCartVisable, setCartVisable, cartItems } = useContext(CartContext);
    const items = cartItems.reduce((accumulatedQuantity, cartItem) => accumulatedQuantity + cartItem.quantity, 0);
    return (
        <div className='cart-icon-container' onClick={() => { setCartVisable(!isCartVisable) }}>
            <ShoppingIcon className='shopping-icon' />
            <span className='item-count'>{items}</span>
        </div>
    );
}

export default CartIcon;