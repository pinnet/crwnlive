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

import { CartIconContainer, ItemCount } from './cart-icon.styles';
import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

/**
 * Represents a cart icon component.
 * @component
 * @returns {JSX.Element} The JSX element representing the cart icon.
 */
const CartIcon = () => {
    const { isCartVisable, setCartVisable,quantity } = useContext(CartContext);
    return (
        <CartIconContainer onClick={() => { setCartVisable(!isCartVisable) }}>
            <ShoppingIcon className='shopping-icon' />
            <ItemCount>{quantity}</ItemCount>
        </CartIconContainer>
    );
}

export default CartIcon;