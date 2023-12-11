/**
*  @file store.js
*  @created Mon Dec 11 2023
*  @copyright Copyright (c) 2023 dannyarnold.com
*  @author Danny Arnold
 **/
import { compose, legacy_createStore as createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { rootReducer } from './root.reducer';

const persistConfig = {
    key: 'root',
    storage,
    blacklist: ['user']
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middlewares = [process.env.NODE_ENV === 'development' &&  logger].filter(Boolean);

const composeEnhancers = compose(applyMiddleware( ...middlewares ));

export const store = createStore( persistedReducer , undefined, composeEnhancers);
export const persistor = persistStore(store);