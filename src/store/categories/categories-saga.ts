/**
 * @file categories-saga.js
 * @created Tue Dec 12 2023
 * @copyright Copyright (c) 2023 dannyarnold.com
 * @author Danny Arnold
 **/
import { takeLatest, all, put, call } from 'typed-redux-saga/macro';
import { getCategoriesAndDocuments } from '../../utils/firebase/firebase.utils';
import {
    fetchCategoriesSuccess,
    fetchCategoriesFail,
} from './categories.actions';
import { CATEGORIES_ACTION_TYPES } from './categories.types';

export function* fetchCategoriesAsync() {
    try {
        const categories = yield* call(getCategoriesAndDocuments);
        yield* put(fetchCategoriesSuccess(categories));
    } catch (error) {
        yield* put(fetchCategoriesFail(error as Error));
    }
}
export function* onFetchCategories() {
    yield* takeLatest(
        CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START,
        fetchCategoriesAsync
    );
}
export function* categoriesSaga() {
    yield* all([call(onFetchCategories)]);
}
