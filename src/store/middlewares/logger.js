/**
 * @file logger.js
 * @created Mon Dec 11 2023
 * @copyright Copyright (c) 2023 dannyarnold.com
 * @author Danny Arnold
 **/

export const loggerMiddleware = (store) => (next) => (action) => {
    if(!action.type) {
        return next(action);
    }
    console.log('type:', action.type);
    console.log('payload:', action.payload);
    console.log('current state', store.getState())
    const result = next(action);
    console.log('next state', store.getState());
    return result;
}