export const UserActionTypes = {
    SET_CURRENT_USER: 'SET_CURRENT_USER',
    GOOGLE_SIGN_IN_START: 'GOOGLE_SIGN_IN_START',
    GOOGLE_SIGN_IN_SUCCESS: 'GOOGLE_SIGN_IN_SUCCESS',
    GOOGLE_SIGN_IN_FAILURE: 'GOOGLE_SIGN_IN_FAILURE',
    EMAIL_SIGN_IN_START: 'EMAIL_SIGN_IN_START',
    EMAIL_SIGN_IN_SUCCESS: 'EMAIL_SIGN_IN_SUCCESS',
    EMAIL_SIGN_IN_FAILURE: 'EMAIL_SIGN_IN_FAILURE'
};

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
export const emailSignInStart = () => ({
    type: UserActionTypes.EMAIL_SIGN_IN_START
});

export const emailSignInSuccess = emailAndPassword => ({
    type: UserActionTypes.EMAIL_SIGN_IN_SUCCESS,
    payload: emailAndPassword
});

export const emailSignInFailure = error => ({
    type: UserActionTypes.EMAIL_SIGN_IN_FAILURE,
    payload: error
});