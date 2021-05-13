import { takeLatest, call, put } from "redux-saga/effects";
import {
  convertCollectionToMap,
  firestore,
} from "../../../firebase/firebase.utils";

import {
  fetchingCollectionsFailed,
  fetchingCollectionsSuccess,
} from "./shop.actions";

import { shopActionTypes } from "./shop.actionTypes";

export function* fetchCollections(action) {
  try {
    const collectionRef = firestore.collection("collections");
    const snapshot = yield collectionRef.get();
    const collectionsMap = yield call(convertCollectionToMap, snapshot);
    yield put(fetchingCollectionsSuccess(collectionsMap));
  } catch (error) {
    yield put(fetchingCollectionsFailed(error.message));
  }
}

export function* onFetchCollectionsStart(action) {
  yield takeLatest(
    shopActionTypes.FETCHING_COLLECTIONS_START,
    fetchCollections
  );
}
