import { shopActionTypes } from "./shop.actionTypes";
import {
  firestore,
  convertCollectionToMap,
} from "../../../firebase/firebase.utils";

export const fetchingCollectionsStart = () => {
  return {
    type: shopActionTypes.FETCHING_COLLECTIONS_START,
  };
};

export const fetchingCollectionsSuccess = (collections) => {
  return {
    type: shopActionTypes.FETCHING_COLLECTIONS_SUCCESS,
    payload: collections,
  };
};

export const fetchingCollectionsFailed = (error) => {
  return {
    type: shopActionTypes.FETCHING_COLLECTIONS_FAILED,
    payload: error,
  };
};

export const fetchingCollectionsAsync = () => {
  return (dispatch) => {
    const collectionRef = firestore.collection("collections");
    dispatch(fetchingCollectionsStart());
    // console.log("shop", collectionRef);
    //*we can also use onSnapshot method
    collectionRef
      .get()
      .then((snap) => {
        const collectionsMap = convertCollectionToMap(snap);
        dispatch(fetchingCollectionsSuccess(collectionsMap));
      })
      .catch((error) => dispatch(fetchingCollectionsFailed(error.message)));
  };
};
