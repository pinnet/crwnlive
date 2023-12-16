import { useSelector } from 'react-redux';
import { selectCategoriesMap, selectCategoriesIsLoading } from '../../store/categories/categories.selector';
import { CategoryContainer, Title, BackLink } from './category.styles';
import { Fragment } from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ProductCard from '../../components/product-card/product-card.component';
import Spinner from '../../components/spinner/spinner.component';

const Category = () => {    
    const categories = useSelector(selectCategoriesMap);
    const { category } = useParams();
    const [ products, setProducts] = useState(categories[category]);
    const isLoading = useSelector(selectCategoriesIsLoading);

    useEffect(() => {
        setProducts(categories[category]);
    }, [category, categories]);


    const title = category.toUpperCase();

    return (
        <Fragment>
            <BackLink to="/shop">Back to Shop</BackLink>
            <Title>{title}</Title>
            { 
                isLoading ? (<Spinner /> 
                ):(
                <CategoryContainer>
                  {
                    products && products.map((product) => <ProductCard key={product.id} product={ product } />)
                  }
                </CategoryContainer>)            
            }
        </Fragment>
    )
}   

export default Category;
