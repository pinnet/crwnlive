/**
*  @file store.js
*  @created Mon Dec 11 2023
*  @copyright Copyright (c) 2023 dannyarnold.com
*  @author Danny Arnold
 **/
//#region library imports
import { compose, legacy_createStore as createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { thunk } from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
//#endregion

import { rootReducer } from './root.reducer';
const production = process.env.NODE_ENV === 'production';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart']
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
const middlewares = [thunk,!production &&  logger].filter(Boolean);

const composeEnhancer = (!production && window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
const composeEnhancers = composeEnhancer(applyMiddleware( ...middlewares ));

export const store = createStore( persistedReducer , undefined, composeEnhancers);
export const persistor = persistStore(store);