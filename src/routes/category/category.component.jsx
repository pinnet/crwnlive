import './category.styles.scss';
import { useContext, useState, useEffect } from 'react';
import { CategoriesContext } from '../../contexts/categories.context';
import { useParams,Link } from 'react-router-dom';
import ProductCard from '../../components/product-card/product-card.component';

const Category = () => {
    console.log('Category Render');

    const { category } = useParams();
    const { categoriesMap } = useContext(CategoriesContext);
    const [ products, setProducts] = useState(categoriesMap[category]);
    
    useEffect(() => {
        setProducts(categoriesMap[category]);
    }, [category, categoriesMap]);


    const title = category.toUpperCase();

    return (
        <>
            <Link className="back-link" to="/shop">Back</Link>
            <h1 className="category-title">{title}</h1>
            <div className="category-route-container">
            {
                products && products.map((product) => <ProductCard key={product.id} product={ product } />)
            }
            </div>
        </>
    )
}   

export default Category;
