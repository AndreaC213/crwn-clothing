import UserActionTypes from './user.types';

// Initial the state
const INITIAL_STATE = {
    currentUser: null, 
    error: null
}

// state would be redux store in whatever action pass in 
// userReducer with two objects 'state' and 'action'
// clear the error if the action is successed
const userReducer = (state= INITIAL_STATE, action) => {

    // check the action type
    switch (action.type) {
        case UserActionTypes.SIGN_IN_SUCCESS:
            return {
                ...state,
                currentUser: action.payload,
                error: null
            };
        case UserActionTypes.SIGN_IN_SUCCESS:
            return {
                ...state, 
                currentUser: null,
                error: null
            }
        case UserActionTypes.SIGN_IN_FAILURE:
        case UserActionTypes.SIGN_OUT_FAILURE:
            return {
                ...state,
                error: action.payload
            };
        default:
            return state;
    }
}

export default userReducer;