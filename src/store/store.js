import { compose, legacy_createStore as createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger'; 
import { rootReducer } from './root.reducer';

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

export const store = createStore(rootReducer, undefined, composeEnhancers);