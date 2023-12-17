/**
 * @file cart-icon.component.tsx
 * @created Sat Dec 16 2023
 * @copyright Copyright (c) 2023 dannyarnold.com
 * @author Danny Arnold
 * @module CartIcon
 * @desc Represents a cart icon component.
 * @requires React
 * @requires shopping-bag.svg
 */

import { ShoppingIcon, CartIconContainer, ItemCount } from './cart-icon.styles';
import { useDispatch,useSelector } from 'react-redux';
import { selectCartItemsCount, selectCartOpen } from '../../store/cart/cart.selector';
import { setCartOpen } from '../../store/cart/cart.actions';

/**
 * Represents a cart icon component.
 * @component
 * @returns {JSX.Element} The JSX element representing the cart icon.
 */
const CartIcon = (): JSX.Element  => {
    const dispatch = useDispatch();
    const isCartOpen = useSelector(selectCartOpen);
    const quantity = useSelector(selectCartItemsCount);
    
    const toggleCart = ():void => {
        dispatch(setCartOpen(!isCartOpen));
    }
    
    return (
        <CartIconContainer onClick={toggleCart}>
            <ShoppingIcon />
            <ItemCount>{quantity}</ItemCount>
        </CartIconContainer>
    );
}

export default CartIcon;