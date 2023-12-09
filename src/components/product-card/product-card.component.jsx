/*
 * product-card.component.jsx
 * Created on Sat Dec 09 2023
 *
 * Copyright (c) 2023 dannyarnold.com
 * Author: Danny Arnold
 */

import './product-card.styles.scss';
import CustomButton from '../custom-button/custom-button.component';

const ProductCard = ({ product }) => {
    const { name, price, imageUrl } = product;
    return (
        <div className='product-card-container'>    
            <img alt={name} className='img' src={imageUrl} />
            <div className='footer'>
              <span className='name'>{name}</span>
              <span className='price'>${price}</span>
            </div>
            <CustomButton inverted='true' >Add to Cart</CustomButton>
        </div>
    );
}

export default ProductCard;