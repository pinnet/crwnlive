/*
 * product-card.component.jsx
 * Created on Sat Dec 09 2023
 *
 * Copyright (c) 2023 dannyarnold.com
 * Author: Danny Arnold
 */

import './product-card.styles.scss';
import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';

const ProductCard = ({ product }) => {
    const { addToCart } = useContext(CartContext);
    const { name, price, imageUrl } = product;
    const addToCartHandler = () => { addToCart(product); }   
    return (
        <div className='product-card-container'>    
            <img alt={name} className='img' src={imageUrl} />
            <div className='footer'>
              <span className='name'>{name}</span>
              <span className='price'>${price}</span>
            </div>
            <Button buttonType={BUTTON_TYPE_CLASSES.inverted} onClick={addToCartHandler} >Add to Cart</Button>
        </div>
    );
}

export default ProductCard;