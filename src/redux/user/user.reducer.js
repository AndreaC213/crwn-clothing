// Initial the state
const INITIAL_STATE = {
    currentUser: null
}

// state would be redux store in whatever action pass in 
// userReducer with two objects 'state' and 'action'
const userReducer = (state, action) => {

    // check the action type
    switch (action.type) {
        case 'SET_CURRENT_USER':
            return {
                ...state,
                currentUser: action.payload
            }
        default:
            return state;
    }
}

export default userReducer;