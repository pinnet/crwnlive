import './checkout-item.styles.scss'
import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';

const CheckoutItem = ({cartItem}) => {
    
    const {addToCart,removeFromCart,removeAllFromCart } = useContext(CartContext);
    const { name, imageUrl, price, quantity,itemTotal } = cartItem;
    const removeItem = () => { removeFromCart(cartItem); }
    const addItem = () => { addToCart(cartItem); }
    const removeAll = () => { removeAllFromCart(cartItem); }
    return (
        <div className='checkout-item-container'>
            <div className='image-container'>
                <img alt={name} src={imageUrl} />
            </div>
            <span className='name'>{name} X ${price}</span>
            <span className='quantity'>
                <div className='arrow' onClick={removeItem}>&#10094;</div>
                <span className='value'>{quantity}</span>
                <div className='arrow' onClick={addItem}>&#10095;</div>
            </span>
            <span className='price'>${itemTotal}</span>
            <div className='remove-button' onClick={removeAll}>&#10005;</div>
        </div>
    );
}

export default CheckoutItem;