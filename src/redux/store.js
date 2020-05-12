import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { persistStore } from 'redux-persist';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './root-reducer';

// middleware is between reducer and action to interpret the actions  
// then we dispatch the actions into store
// store is between root-reducer and components
// so we can pull value from the store to components by usind {provider} in 'index.js'

// handling asynchronous event by using saga as middleware

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger);
}

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

// sagaMiddleware.run()

// persist current store by using persistor as a provider
export const persistor = persistStore(store);
 
export default { store, persistor };


