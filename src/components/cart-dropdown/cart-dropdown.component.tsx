/**
 * @file cart-dropdown.component.tsx
 * @created Thu Dec 14 2023
 * @copyright Copyright (c) 2023 dannyarnold.com
 * @author Danny Arnold
 *
 * @description Renders a dropdown component for the cart.
 * @module CartDropdown
 * @returns {JSX.Element} The rendered CartDropdown component.
 * @exports CartDropdown
 */

//#region library imports
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
//#endregion

//#region local imports
import { selectCartItems } from '../../store/cart/cart.selector';
import { CartDropdownContainer, EmptyMessage, CartItems } from './cart-dropdown.styles';
import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';
//#endregion

/**
 * Renders a dropdown component for the cart.
 * @returns {JSX.Element} The rendered CartDropdown component.
 */
const CartDropdown = () : JSX.Element => {
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