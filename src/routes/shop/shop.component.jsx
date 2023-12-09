/*
 * shop.component.jsx
 * Created on Fri Dec 08 2023
 *
 * Copyright (c) 2023 dannyarnold.com
 * Author: Danny Arnold
 */
import { useContext } from 'react';
import { ProductProvider,ProductContext } from '../../contexts/product.context';
import ProductCard from '../../components/product-card/product-card.component';
import './shop.styles.scss';

/**
 * Renders the Shop component.
 * @returns {JSX.Element} The rendered Shop component.
 */
const Shop = () => {
    const { products } = useContext(ProductContext);
    console.log(products);
    return (
    <div>
        <h1>Shop</h1>
        <div className='products-container'>
        <ProductProvider>
            {
                products.map(({ id, ...productData }) => (
                    <div key={id}>
                        <ProductCard  product={productData}/>
                    </div>
                ))
            }
        </ProductProvider>
        </div>
    </div>
)};

export default Shop;