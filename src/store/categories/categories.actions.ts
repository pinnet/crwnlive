/**
 * @file categories.actions.ts
 * @created Thu Dec 14 2023
 * @copyright Copyright (c) 2023 dannyarnold.com
 * @author Danny Arnold
 **/

import {
    createAction,
    Action,
    ActionWithPayload,
} from '../../utils/reducer/reducer.utils';

import { CATEGORIES_ACTION_TYPES, Category } from './categories.types';

export type FetchCategoriesStart =
    Action<CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START>;

export type FetchCategoriesSuccess = ActionWithPayload<
    CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS,
    Category[]
>;
export type FetchCategoriesFail = ActionWithPayload<
    CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAIL,
    Error
>;

export type CategoryAction =
    | FetchCategoriesSuccess
    | FetchCategoriesFail
    | FetchCategoriesStart;

export const fetchCategoriesStart = (): FetchCategoriesStart => {
    return createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START);
};
export const fetchCategoriesSuccess = (
    categoriesArray: Category[]
): FetchCategoriesSuccess => {
    return createAction(
        CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS,
        categoriesArray
    );
};
export const fetchCategoriesFail = (error: Error): FetchCategoriesFail => {
    return createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAIL, error);
};
