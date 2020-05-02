import { UserActionTypes } from './user.types';

// fire off the actions hold that snapShot object,
// we used to store in our state at 'firebase.utils'
// this action function return objects
// each object in the format that action expected it to be
export const setCurrentUser = user => ({
    type: UserActionTypes.SET_CURRENT_USER,
    payload: user
});