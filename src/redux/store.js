import { createStore, appyMiddleware } from 'redux';
import logger from 'redux-logger';

import rootReducer from './root-reducer';

// middleware is between reducer and action to interpret the actions  
// then we dispatch the actions into store
// store is between root-reducer and components
// so we can pull value from the store to components by usind {provider} in 'index.js'

// pass the middleware as an array to be scalable
// 'logger' store prevState and nextState 
const middlewares = [logger];

const store = createStore(rootReducer, appyMiddleware(...middlewares));

export default store;


