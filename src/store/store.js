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

/*
const loggerMiddleware = (store) => (next) => (action) => {
    if(!action.type) {
        return next(action);
    }
    console.log('type:', action.type);
    console.log('payload:', action.payload);
    console.log('current state', store.getState())
    const result = next(action);
    console.log('next state', store.getState());
    return result;
  };
*/

const middlewares = [logger];

const composeEnhancers = compose(applyMiddleware( ...middlewares ));

export const store = createStore( persistedReducer , undefined, composeEnhancers);
export const persistor = persistStore(store);