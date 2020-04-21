import { combineReducers } from 'redux';

import userReducer from './user/user.reducer';

// reducer key is every slice of state
export default combineReducers({
    user: userReducer
});