import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { persistStore } from 'redux-persist';

import rootReducer from './root-reducer';

// middleware is between reducer and action to interpret the actions  
// then we dispatch the actions into store
// store is between root-reducer and components
// so we can pull value from the store to components by usind {provider} in 'index.js'

// pass the middleware as an array to be scalable
// 'logger' store prevState and nextState 
const middlewares = [];

if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger);
}

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

// persist current store by using persistor as a provider
export const persistor = persistStore(store);
 
export default { store, persistor };


