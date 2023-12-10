/*
 * product-card.component.jsx
 * Created on Sat Dec 09 2023
 *
 * Copyright (c) 2023 dannyarnold.com
 * Author: Danny Arnold
 */

import { ProductCartContainer, Footer, Name, Price } from './product-card.styles';
import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';

const ProductCard = ({ product }) => {
    const { addItemToCart } = useContext(CartContext);
    const { name, price, imageUrl } = product;
    const addToCartHandler = () => { addItemToCart(product); }   
    return (
        <ProductCartContainer>    
            <img alt={name} src={imageUrl} />
            <Footer>
              <Name>{name}</Name>
              <Price>${price}</Price>
            </Footer>
            <Button buttonType={BUTTON_TYPE_CLASSES.inverted} onClick={addToCartHandler} >Add to Cart</Button>
        </ProductCartContainer>
    );
}

export default ProductCard;