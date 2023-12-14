/**
 * @file categories.reducer.js
 * @created Mon Dec 11 2023
 * @copyright Copyright (c) 2023 dannyarnold.com
 * @author Danny Arnold
 **/

//#region library imports
import { AnyAction } from 'redux';
//#endregion

//#region application imports
import { Category } from './categories.types';
import {
    fetchCategoriesStart,
    fetchCategoriesSuccess,
    fetchCategoriesFail,
} from './categories.actions';
//#endregion

export type CategoriesState = {
    readonly categories: Category[];
    readonly isLoading: boolean;
    readonly error: Error | null;
};

export const CATEGORIES_INITIAL_STATE: CategoriesState = {
    categories: [],
    isLoading: false,
    error: null,
};

export const categoriesReducer = (
    state = CATEGORIES_INITIAL_STATE,
    action = {} as AnyAction
) => {
    if (fetchCategoriesStart.match(action)) {
        return {
            ...state,
            isLoading: true,
        };
    }
    if (fetchCategoriesSuccess.match(action)) {
        return {
            ...state,
            categories: action.payload,
            isLoading: false,
        };
    }
    if (fetchCategoriesFail.match(action)) {
        return {
            ...state,
            error: action.payload,
            isLoading: false,
        };
    }
    return state;
};
