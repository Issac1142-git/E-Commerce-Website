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

export const googleSigninSuccess = (user) => ({
  type: userActionTypes.GOOGLE_SIGNIN_SUCCESS,
  payload: user,
});

export const googleSigninFailed = (error) => ({
  type: userActionTypes.GOOGLE_SIGNIN_FAILED,
  payload: error,
});

export const emailSigninStart = (emailAndPassword) => ({
  type: userActionTypes.EMAIL_SIGNIN_START,
  payload: emailAndPassword,
});

export const emailSigninSuccess = (user) => ({
  type: userActionTypes.EMAIL_SIGNIN_SUCCESS,
  payload: user,
});

export const emailSigninFailed = (error) => ({
  type: userActionTypes.EMAIL_SIGNIN_FAILED,
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
