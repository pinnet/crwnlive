/*
 * shop.component.jsx
 * Created on Fri Dec 08 2023
 *
 * Copyright (c) 2023 dannyarnold.com
 * Author: Danny Arnold
 */
import { useDispatch  } from 'react-redux';
import { useEffect } from 'react';
import { getCategoriesAndDocuments } from '../../utils/firebase.utils'; 
import { setCategories } from '../../store/categories/categories.actions';
import { Routes,Route } from 'react-router-dom';
import Category from '../category/category.component';
import CategoriesPreview from '../categories-preview/categories.preview.component';
import './shop.styles.scss';

/**
 * Renders the Shop component.
 * @returns {JSX.Element} The rendered Shop component.
 */
const Shop = () => {
    const dispatch = useDispatch();
    
    let fetched = false;
    useEffect(() => {
        const getCategories = async () => {
        const categories = await getCategoriesAndDocuments();
        console.log(categories);
        dispatch(setCategories(categories));
    }
    if(!fetched) {
      getCategories();
      //eslint-disable-next-line
      fetched = true;
    } 
  }, [fetched]);

  return (
        <Routes>
            <Route index element={<CategoriesPreview />} />
            <Route path=":category" element={<Category />} />
        </Routes>
    )  
};

export default Shop;