import { useSelector } from 'react-redux';
import { selectCategoriesMap } from '../../store/categories/categories.selector';
import { Fragment } from 'react';
import CategoryPreview from '../../components/category-preview/category-preview.component';
/**
 * The CategoriesPreview component.
 * @returns {JSX.Element} The CategoriesPreview component.
 */
const CategoriesPreview = () => {

    const categoriesMap = useSelector(selectCategoriesMap);
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