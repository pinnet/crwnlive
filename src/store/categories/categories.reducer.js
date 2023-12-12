/**
 * @file categories.reducer.js
 * @created Mon Dec 11 2023
 * @copyright Copyright (c) 2023 dannyarnold.com
 * @author Danny Arnold
 **/


import { CATEGORIES_ACTION_TYPES } from './categories.types';

export const CATEGORIES_INITIAL_STATE = {
    categories: [],
    isLoding: false,
    error: null
    };

export const categoriesReducer = (state = CATEGORIES_INITIAL_STATE, action) => {
    const { type, payload } = action;
    switch (type) {
        case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAIL:
            return {
                ...state,
                error: payload,
                isLoading: false
            };
        case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START:
            return {
                ...state,
                isLoading: true
            };
        case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS:
            return {
                ...state,
                categories: payload,
                isLoading: false
            };
        default:
            return state;
    }
}