/*
 * product-card.component.jsx
 * Created on Sat Dec 09 2023
 *
 * Copyright (c) 2023 dannyarnold.com
 * Author: Danny Arnold
 */
import { useDispatch,useSelector } from 'react-redux';
import { addItemToCart } from '../../store/cart/cart.actions';
import { selectCartItems } from '../../store/cart/cart.selector';
import { ProductCartContainer, Footer, Name, Price } from './product-card.styles';
import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';
import { CategoryItem } from '../../store/categories/categories.types';

export type ProductCardProps = {
    product: CategoryItem
};


const ProductCard = ({ product }: ProductCardProps) => {
    const dispatch = useDispatch();
    const currentCartItems = useSelector(selectCartItems);
    const { name, price, imageUrl } = product;
    const addToCartHandler = () => { 
        dispatch(addItemToCart(currentCartItems,product));
    }   
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