import { takeLatest, put, call } from "redux-saga/effects";
import { userActionTypes } from "./user.actionTypes";
import {
  auth,
  provider,
  createUserProfileDocument,
  getCurrentUser,
} from "../../../firebase/firebase.utils";
import {
  googleSigninSuccess,
  googleSigninFailed,
  emailSigninFailed,
  emailSigninSuccess,
  signoutSuccess,
  signoutFailed,
} from "./user.actions";

//* Google Signin

export function* googleSigninAsync() {
  try {
    const { user } = yield auth.signInWithPopup(provider);
    const userref = yield call(createUserProfileDocument, user);
    const snapshot = yield userref.get();
    // console.log("id pls", snapshot.data());
    yield put(googleSigninSuccess({ id: snapshot.id, ...snapshot.data() }));
  } catch (err) {
    yield put(googleSigninFailed(err.message));
  }
}
export function* onGoogleSigninStart() {
  yield takeLatest(userActionTypes.GOOGLE_SIGNIN_START, googleSigninAsync);
}

//! email Signin

export function* emailSigninAsync({ payload: { email, password } }) {
  try {
    const { user } = yield auth.signInWithEmailAndPassword(email, password);
    const userref = yield call(createUserProfileDocument, user);
    const snapshot = yield userref.get();
    // console.log(snapshot.data());
    yield put(emailSigninSuccess({ id: snapshot.id, ...snapshot.data() }));
  } catch (err) {
    yield put(emailSigninFailed(err.message));
  }
}

export function* onEmailSigninStart(action) {
  yield takeLatest(userActionTypes.EMAIL_SIGNIN_START, emailSigninAsync);
}

//* check Session
export function* checkSessionAsync() {
  try {
    const userAuth = yield getCurrentUser();
    if (!userAuth) return;
    const userRef = yield call(createUserProfileDocument, userAuth);
    const snapshot = yield userRef.get();
    yield put(emailSigninSuccess({ id: snapshot.id, ...snapshot.data() }));
  } catch (err) {
    yield put(emailSigninFailed(err.message));
  }
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
