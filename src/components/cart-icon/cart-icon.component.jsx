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
import { useDispatch, useSelector } from 'react-redux';

import { setIsCartOpen } from '../../store/cart/cart.actions';
import { selectIsCartOpen,selectCartItems } from '../../store/cart/cart.selector';
import { ShoppingIcon, CartIconContainer, ItemCount } from './cart-icon.styles';
import { useEffect } from 'react';

/**
 * Represents a cart icon component.
 * @component
 * @returns {JSX.Element} The JSX element representing the cart icon.
 */
const CartIcon = () => {
    let isCartOpen = useSelector(selectIsCartOpen);
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(setIsCartOpen(isCartOpen));
    },[isCartOpen,dispatch]);

    const toggleCart = () => {
        console.log('toggleCart');
        isCartOpen  = !isCartOpen;
    }
    const { quantity } = useSelector(selectCartItems);
    return (
        <CartIconContainer onClick={toggleCart}>
            <ShoppingIcon />
            <ItemCount>{quantity}</ItemCount>
        </CartIconContainer>
    );
}

export default CartIcon;