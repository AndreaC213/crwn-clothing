import UserActionTypes from './user.types';

// fire off the actions hold that snapShot object,
// we used to store in our state at 'firebase.utils'
// this action function '{ setCurrentUser }' return objects
// each object in the format that action expected it to be
export const setCurrentUser = user => ({
    type: UserActionTypes.SET_CURRENT_USER,
    payload: user
});

export const googleSignInStart = () => ({
    type: UserActionTypes.GOOGLE_SIGN_IN_START
});

export const googleSignInSuccess = user => ({
    type: UserActionTypes.GOOGLE_SIGN_IN_SUCCESS,
    payload: user
});

export const googleSignInFailure = error => ({
    type: UserActionTypes.GOOGLE_SIGN_IN_FAILURE,
    payload: error
});

// email have to take the password value user passed in
export const emailSignInStart = emailAndPassword => ({
    type: UserActionTypes.EMAIL_SIGN_IN_START,
    payload: emailAndPassword
});

export const emailSignInSuccess = emailAndPassword => ({
    type: UserActionTypes.EMAIL_SIGN_IN_SUCCESS,
    payload: emailAndPassword
});

export const emailSignInFailure = error => ({
    type: UserActionTypes.EMAIL_SIGN_IN_FAILURE,
    payload: error
});