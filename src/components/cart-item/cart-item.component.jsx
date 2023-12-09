import './cart-item.styles.scss';

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => {
    return (
        <div className='cart-item-container'>
        
            <div className='item-details'>
                <span className='name'>{name}</span>
                <img alt={name} className='img' src={imageUrl} />
                <span className='price'>{quantity} x ${price}</span>
            </div>
        </div>
    );
}

export default CartItem;