import { useContext,Fragment } from 'react';
import { CategoriesContext } from '../../contexts/categories.context';
import CategoryPreview from '../../components/category-preview/category-preview.component';
/**
 * The CategoriesPreview component.
 * @returns {JSX.Element} The CategoriesPreview component.
 */
const CategoriesPreview = () => {
    const { categoriesMap } = useContext(CategoriesContext);
    return (
    <Fragment>
    {
        Object.keys(categoriesMap).map(title => {
            const products = categoriesMap[title];
            return (
                <Fragment key={title}>
                    <CategoryPreview tile={title} products={products} />
                </Fragment>
        )})
    }
    </Fragment>
)};
export default CategoriesPreview;