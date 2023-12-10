/*
 * shop.component.jsx
 * Created on Fri Dec 08 2023
 *
 * Copyright (c) 2023 dannyarnold.com
 * Author: Danny Arnold
 */
import { useContext,Fragment } from 'react';
import { CategoriesContext } from '../../contexts/categories.context';
import CategoryPreview from '../../components/category-preview/category-preview.component';
//import ProductCard from '../../components/product-card/product-card.component';
import './shop.styles.scss';

/**
 * Renders the Shop component.
 * @returns {JSX.Element} The rendered Shop component.
 */
const Shop = () => {
    const { categoriesMap } = useContext(CategoriesContext);
    return (
    <div className='shop-container'>
    {
        Object.keys(categoriesMap).map(title => {
            const products = categoriesMap[title];
            return (
                <Fragment key={title}>
                    <CategoryPreview tile={title} products={products} />
                </Fragment>
        )})
    }
    </div>
)};

export default Shop;