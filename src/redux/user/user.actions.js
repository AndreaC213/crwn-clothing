// fire off the an actions holds that snapShot object,
// we used to store in our state at 'firebase.utils'
// this action function retuen objects
// each object in the format that action expected it to be
export const setCurrentUser = user => ({
    type: 'SET_CURRENT_USER',
    payload: user
});