import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist'
// also get local storage on window browser
import storage from 'redux-persist/lib/storage';

import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer';

// define new persist config
// whitelist: contain the string name we want to store
const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart']
}

// wrape it up with root reducer
const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer
});

// config by call {persistReducer}
// get root reducer with the persistence capability
export default persistReducer(persistConfig, rootReducer);