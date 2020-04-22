import { UserActionTypes } from './user.types';

// Initial the state
const INITIAL_STATE = {
    currentUser: null
}

// state would be redux store in whatever action pass in 
// userReducer with two objects 'state' and 'action'
const userReducer = (state= INITIAL_STATE, action) => {

    // check the action type
    switch (action.type) {
        case UserActionTypes.SET_CURRENT_USER:
            return {
                ...state,
                currentUser: action.payload
            }
        default:
            return state;
    }
}

export default userReducer;