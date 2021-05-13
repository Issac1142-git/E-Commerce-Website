import { userActionTypes } from "./user.actionTypes";

export const setCurrentUser = (user) => {
  return {
    type: userActionTypes.SET_CURRENT_USER,
    payload: user,
  };
};

export const googleSigninStart = () => ({
  type: userActionTypes.GOOGLE_SIGNIN_START,
});

export const emailSigninStart = (emailAndPassword) => ({
  type: userActionTypes.EMAIL_SIGNIN_START,
  payload: emailAndPassword,
});

export const signinSuccess = (user) => ({
  type: userActionTypes.SIGNIN_SUCCESS,
  payload: user,
});

export const signinFailed = (error) => ({
  type: userActionTypes.SIGNIN_FAILED,
  payload: error,
});

export const signoutStart = () => ({
  type: userActionTypes.SIGNOUT_START,
});

export const signoutSuccess = () => ({
  type: userActionTypes.SIGNOUT_SUCCESS,
});

export const signoutFailed = (err) => ({
  type: userActionTypes.SIGNOUT_FAILED,
  payload: err,
});

export const checkSession = () => ({
  type: userActionTypes.CHECK_SESSION,
});

export const signupStart = (credentials) => ({
  type: userActionTypes.SIGNUP_START,
  payload: credentials,
});

export const signupSuccess = ({ user, additionalData }) => ({
  type: userActionTypes.SIGNUP_SUCCESS,
  payload: { user, additionalData },
});

export const signupFailed = (err) => ({
  type: userActionTypes.SIGNUP_FAILED,
  payload: err,
});
