/**
 * @file category-preview.component.tsx
 * @created Sat Dec 16 2023
 * @copyright Copyright (c) 2023 dannyarnold.com
 * @author Danny Arnold
 **/

import { CategoryPreviewContainer, Title, Preview} from './category-preview.styles';
import ProductCard from '../product-card/product-card.component';
import { CategoryItem }from '../../store/categories/categories.types';


export type CategoryPreviewProps = {
    tile: string,
    products: CategoryItem[]
};

const CategoryPreview = ({ tile, products }: CategoryPreviewProps ): JSX.Element => {
    return( 
        <CategoryPreviewContainer>
            <h2><Title to={`/shop/${tile}`} >{tile.toUpperCase()}</Title></h2>            
            <Preview>
                {products.filter((_: CategoryItem, idx: number) => idx < 4 ).map((product: CategoryItem ) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </Preview>
        </CategoryPreviewContainer>
    )
}

export default CategoryPreview;
