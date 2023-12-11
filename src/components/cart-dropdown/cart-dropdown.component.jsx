
/**
 * @file Renders a dropdown component for the cart.
 * @module CartDropdown
 * @returns {JSX.Element} The rendered CartDropdown component.
 * @exports CartDropdown
 */
/*
 * Created on Sat Dec 09 2023
 *
 * Copyright (c) 2023 dannyarnold.com
 * Author: Danny Arnold
 */
import { useSelector } from 'react-redux';
import { selectCartItems } from '../../store/cart/cart.selector';
import { useNavigate } from 'react-router-dom';
import { CartDropdownContainer, EmptyMessage, CartItems } from './cart-dropdown.styles';
import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';

/**
 * Renders a dropdown component for the cart.
 * @returns {JSX.Element} The rendered CartDropdown component.
 */
const CartDropdown = () => {
    const cartItems = useSelector(selectCartItems);
    const navigate = useNavigate();
    const goToCheckout = () => {
        navigate('/checkout');
    }

    return (
        <CartDropdownContainer>
            <CartItems>
                {
                    cartItems.length  ? cartItems.map(item => <CartItem key={item.id} item={item} />)
                    : <EmptyMessage>Your cart is empty</EmptyMessage>
                }
            </CartItems>            
            <Button onClick={goToCheckout}>GO TO CHECKOUT</Button>
        </CartDropdownContainer>
    );
}

export default CartDropdown;