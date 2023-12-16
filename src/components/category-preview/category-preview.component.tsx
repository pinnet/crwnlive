import { CategoryPreviewContainer, Title, Preview} from './category-preview.styles';
import ProductCard from '../product-card/product-card.component';

export type CategoryPreviewProps = {
    tile: string,
    products: any
};

const CategoryPreview = ({ tile, products } :CategoryPreviewProps ) => {
    
    return( 
        <CategoryPreviewContainer>
            <h2><Title to={`/shop/${tile}`} >{tile.toUpperCase()}</Title></h2>            
            <Preview>
                {products.filter((_,idx) => idx < 4 ).map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </Preview>
        </CategoryPreviewContainer>
    )
}

export default CategoryPreview;
