import { shopActionTypes } from "./shop.actionTypes";

const initialState = {
  collections: null,
  isFetching: false,
  error: null,
};

export const shopReducer = (state = initialState, action) => {
  switch (action.type) {
    case shopActionTypes.FETCHING_COLLECTIONS_START:
      return {
        ...state,
        isFetching: true,
      };
    case shopActionTypes.FETCHING_COLLECTIONS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        collections: action.payload,
      };
    case shopActionTypes.FETCHING_COLLECTIONS_FAILED:
      return {
        ...state,
        isFetching: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
