/**
 * @fileoverview Checkout item component for the shopping cart.
 * The CheckoutItem component is a child of the Checkout component.
 * 
 * @module components/checkout-item/checkout-item.component
 * @requires react
 * @requires contexts/cart.context
 * 
 * @exports CheckoutItem
 * 
 * Created on Sat Dec 09 2023
 *
 * Copyright (c) 2023 dannyarnold.com
 * Author: Danny Arnold
 */
import { useDispatch,useSelector } from 'react-redux';

import { CheckoutItemContainer, ImageContainer, Quantity, Arrow, Value, RemoveButton, BaseSpan} from './checkout-item.styles'
import { selectCartItems } from '../../store/cart/cart.selector';
import { removeItemFromCart, addItemToCart, removeAllFromCart } from '../../store/cart/cart.actions';
import { CartItem } from '../../store/cart/cart.types';

export type CheckoutItemProps = {
    cartItem: CartItem
};
/**
 * Renders a checkout item component.
 *
 * @param {Object} props - The component props.
 * @param {Object} props.cartItem - The cart item object.
 * @param {string} props.cartItem.name - The name of the item.
 * @param {string} props.cartItem.imageUrl - The URL of the item's image.
 * @param {number} props.cartItem.price - The price of the item.
 * @param {number} props.cartItem.quantity - The quantity of the item.
 * @param {number} props.cartItem.itemTotal - The total price of the item.
 * @returns {JSX.Element} The rendered checkout item component.
 */
const CheckoutItem = ({cartItem}: CheckoutItemProps): JSX.Element => {
    const currentCartItems = useSelector(selectCartItems);
    const dispatch = useDispatch();

    const removeItem = () => {
        dispatch(removeItemFromCart(currentCartItems,cartItem));
    }
    const addItem = () => {
        dispatch(addItemToCart(currentCartItems,cartItem));
    }
    const removeAll = () => {
        dispatch(removeAllFromCart(currentCartItems,cartItem));
    }

    const { name, imageUrl, price, quantity,itemTotal } = cartItem;
    
    return (
        <CheckoutItemContainer>
            <ImageContainer>
                <img alt={name} src={imageUrl} />
            </ImageContainer>
            <BaseSpan>{name} <br/> ${price}</BaseSpan>
            <Quantity>
                <Arrow onClick={removeItem}>&#10094;</Arrow>
                <Value>{quantity}</Value>
                <Arrow onClick={addItem}>&#10095;</Arrow>
            </Quantity>
            <BaseSpan>${itemTotal}</BaseSpan>
            <RemoveButton onClick={removeAll}>&#10005;</RemoveButton>
        </CheckoutItemContainer>
    );
}

export default CheckoutItem;