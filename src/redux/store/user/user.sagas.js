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
  createUserSuccess,
  createUserFailed,
} from "./user.actions";

export function* getSnapshotFromUserAuth(userAuth, additionalData) {
  try {
    const userRef = yield call(
      createUserProfileDocument,
      userAuth,
      additionalData
    );
    const userSnapshot = yield userRef.get();
    yield put(
      emailSigninSuccess({ id: userSnapshot.id, ...userSnapshot.data() })
    );
  } catch (error) {
    yield put(emailSigninFailed(error));
  }
}

//* Google Signin

export function* googleSigninAsync() {
  try {
    const { user } = yield auth.signInWithPopup(provider);
    yield getSnapshotFromUserAuth(user);
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
    yield getSnapshotFromUserAuth(user);
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
    yield getSnapshotFromUserAuth(userAuth);
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

//! create User with email and password

export function* createUserAsync({
  payload: { email, password, displayName },
}) {
  try {
    const { user } = yield auth.createUserWithEmailAndPassword(email, password);
    yield put(createUserSuccess({ user, additionalData: { displayName } }));
    // yield put(checkSessionAsync());
  } catch (err) {
    yield put(createUserFailed(err.message));
  }
}

export function* createUser() {
  yield takeLatest(userActionTypes.CREATE_USER_START, createUserAsync);
}

// export function* onCreateUserSuccessAsync({
//   payload: { user, additionalData },
// }) {
//   yield getSnapshotFromUserAuth(user, additionalData);
// }

// export function* onCreateUserSuccess() {
//   yield takeLatest(
//     userActionTypes.CREATE_USER_SUCCESS,
//     onCreateUserSuccessAsync
//   );
// }
