/**
 * @file categories.preview.component.jsx
 * @created Tue Dec 12 2023
 * @copyright Copyright (c) 2023 dannyarnold.com
 * @author Danny Arnold
 **/

//#region library imports
import { useSelector } from 'react-redux';
import { Fragment } from 'react';
//#endregion

import { selectCategoriesMap, selectCategoriesIsLoading } from '../../store/categories/categories.selector';
import CategoryPreview from '../../components/category-preview/category-preview.component';
import Spinner from '../../components/spinner/spinner.component';

/**
 * The CategoriesPreview component.
 * @returns {JSX.Element} The CategoriesPreview component.
 */
const CategoriesPreview = () => {
    const isLoading = useSelector(selectCategoriesIsLoading);
    const categoriesMap = useSelector(selectCategoriesMap);
    return (
        <Fragment>   
        { isLoading ? (<Spinner />) :
            (Object.keys(categoriesMap).map(title => {
                const products = categoriesMap[title];
                return (
                    <Fragment key={title}>
                        <CategoryPreview tile={title} products={products} />
                    </Fragment>
                );
            }))
        }
        </Fragment>
)};
export default CategoriesPreview;