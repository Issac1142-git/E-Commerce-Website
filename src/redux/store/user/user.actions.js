import { userActionTypes } from "./user.actionTypes";

export const setCurrentUser = (user) => {
  return {
    type: userActionTypes.SET_CURRENT_USER,
    payload: user,
  };
};

// google signin

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

//email signin

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

//signout

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

//check sessions
export const checkSession = () => ({
  type: userActionTypes.CHECK_SESSION,
});

//create user with email and password

export const createUserStart = (emailAndPassword) => ({
  type: userActionTypes.CREATE_USER_START,
  payload: emailAndPassword,
});

export const createUserSuccess = ({ user, additionalData }) => ({
  type: userActionTypes.CREATE_USER_SUCCESS,
  paylaod: { user, additionalData },
});

export const createUserFailed = (err) => ({
  type: userActionTypes.CREATE_USER_FAILED,
  payload: err,
});
