/**
 *  @file store.js
 *  @created Mon Dec 11 2023
 *  @copyright Copyright (c) 2023 dannyarnold.com
 *  @author Danny Arnold
 **/
//#region library imports
import {
    compose,
    legacy_createStore as createStore,
    applyMiddleware,
    Middleware,
} from 'redux';
import logger from 'redux-logger';
import { persistStore, persistReducer, PersistConfig } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import createSagaMiddleware from 'redux-saga';
//#endregion

import { rootReducer } from './root.reducer';
import { rootSaga } from './root-saga';

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

export type RootState = ReturnType<typeof rootReducer>;
const production = process.env.NODE_ENV === 'production';
type ExtendedPersistConfig = PersistConfig<RootState> & {
    whitelist: (keyof RootState)[];
};
const persistConfig: ExtendedPersistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart'],
};
const sagaMiddleware = createSagaMiddleware();
const persistedReducer = persistReducer(persistConfig, rootReducer);
const middlewares = [sagaMiddleware, !production && logger].filter(
    Boolean
) as Middleware[];
const composeEnhancer =
    (!production &&
        window &&
        (window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] as typeof compose)) ||
    compose;
const composeEnhancers = composeEnhancer(applyMiddleware(...middlewares));

export const store = createStore(persistedReducer, undefined, composeEnhancers);
sagaMiddleware.run(rootSaga);
export const persistor = persistStore(store);
