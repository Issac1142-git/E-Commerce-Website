import { put, takeLatest } from "redux-saga/effects";
import { clearCartItems } from "./cart.actions";
import { userActionTypes } from "../user/user.actionTypes";

export function* clearCart() {
  yield put(clearCartItems());
}

export function* clearCartAfterSignout() {
  yield takeLatest(userActionTypes.SIGNOUT_SUCCESS, clearCart);
}
