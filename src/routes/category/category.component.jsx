import { useSelector } from 'react-redux';
import { selectCategories } from '../../store/categories/categories.selector';
import { CategoryContainer, Title, BackLink } from './category.styles';
import { Fragment } from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ProductCard from '../../components/product-card/product-card.component';

const Category = () => {
    
    console.log('Render/Rerender Category');

    const { category } = useParams();
    const categories = useSelector(selectCategories);
    const [ products, setProducts] = useState(categories[category]);

    
    
    useEffect(() => {
        console.log('Set Products fired');
        setProducts(categories[category]);
    }, [category, categories]);


    const title = category.toUpperCase();

    return (
        <Fragment>
            <BackLink to="/shop">Back to Shop</BackLink>
            <Title>{title}</Title>
            <CategoryContainer>
            {
                products && products.map((product) => <ProductCard key={product.id} product={ product } />)
            }
            </CategoryContainer>
        </Fragment>
    )
}   

export default Category;
