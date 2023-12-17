/**
 * @file shop.component.jsx
 * @created Tue Dec 12 2023
 * @copyright Copyright (c) 2023 dannyarnold.com
 * @author Danny Arnold
 **/

//#region library imports
import { useDispatch  } from 'react-redux';
import { useEffect } from 'react';
import { Routes,Route } from 'react-router-dom';
//#endregion

import { fetchCategoriesStart } from '../../store/categories/categories.actions';
import Category from '../category/category.component';
import CategoriesPreview from '../categories-preview/categories.preview.component';

const Shop = () => {
    const dispatch = useDispatch();
    useEffect(() => {     
        dispatch(fetchCategoriesStart());
    }, [dispatch]);
    
   return (
        <Routes>
            <Route index element={<CategoriesPreview />} />
            <Route path=":category" element={<Category />} />
        </Routes>
    )  
};

export default Shop;