import { takeLatest, put, call } from "redux-saga/effects";
import { userActionTypes } from "./user.actionTypes";
import {
  auth,
  provider,
  createUserProfileDocument,
  getCurrentUser,
} from "../../../firebase/firebase.utils";
import {
  signinSuccess,
  signinFailed,
  signoutSuccess,
  signoutFailed,
  signupSuccess,
  signupFailed,
} from "./user.actions";

//* Google Signin
export function* getSnapshotFromUserAuth(user, additionalData) {
  try {
    const userref = yield call(createUserProfileDocument, user, additionalData);
    const snapshot = yield userref.get();
    // console.log("id pls", snapshot.data());
    yield put(signinSuccess({ id: snapshot.id, ...snapshot.data() }));
  } catch (err) {
    yield put(signinFailed(err.message));
  }
}
export function* googleSigninAsync() {
  const { user } = yield auth.signInWithPopup(provider);
  yield getSnapshotFromUserAuth(user);
}

export function* onGoogleSigninStart() {
  yield takeLatest(userActionTypes.GOOGLE_SIGNIN_START, googleSigninAsync);
}

//! email Signin

export function* emailSigninAsync({ payload: { email, password } }) {
  const { user } = yield auth.signInWithEmailAndPassword(email, password);
  yield getSnapshotFromUserAuth(user);
}

export function* onEmailSigninStart() {
  yield takeLatest(userActionTypes.EMAIL_SIGNIN_START, emailSigninAsync);
}

//* check Session
export function* checkSessionAsync() {
  const userAuth = yield getCurrentUser();
  if (!userAuth) return;
  yield getSnapshotFromUserAuth(userAuth);
}

export function* checkSession() {
  yield takeLatest(userActionTypes.CHECK_SESSION, checkSessionAsync);
}

//* signout
export function* signoutAsync() {
  try {
    yield auth.signOut();
    yield put(signoutSuccess());
  } catch (err) {
    yield put(signoutFailed(err));
  }
}

export function* signout() {
  yield takeLatest(userActionTypes.SIGNOUT_START, signoutAsync);
}

//signup

export function* signupAsync({ payload: { email, password, displayName } }) {
  try {
    const { user } = yield auth.createUserWithEmailAndPassword(email, password);
    yield put(signupSuccess({ user, additionalData: { displayName } }));
  } catch (err) {
    yield put(signupFailed(err.message));
  }
}

export function* signup() {
  yield takeLatest(userActionTypes.SIGNUP_START, signupAsync);
}

export function* signinAfterSignupAsync({ payload: { user, additionalData } }) {
  yield getSnapshotFromUserAuth(user, additionalData);
}

export function* signinAfterSignup() {
  yield takeLatest(userActionTypes.SIGNUP_SUCCESS, signinAfterSignupAsync);
}
