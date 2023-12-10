import './category-preview.styles.scss';
import ProductCard from '../product-card/product-card.component';
import { Link } from 'react-router-dom';

const CategoryPreview = ({ tile, products }) => {
    
    return( 
        <div className='category-preview-container'>
            <Link to={`/shop/${tile}`}>
                <h2>
                    <span>{tile.toUpperCase()}</span>
                </h2>
            </Link>
            <div className='preview'>
                {products.filter((_,idx) => idx < 4 ).map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    )
}

export default CategoryPreview;
