import { userActionTypes } from "./user.actionTypes";

const initialState = {
  currentUser: null,
  error: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case userActionTypes.SIGNUP_FAILED:
    case userActionTypes.SIGNIN_FAILED:
      return {
        ...state,
        error: action.payload,
      };
    case userActionTypes.SIGNIN_SUCCESS:
      return {
        ...state,
        error: null,
        currentUser: action.payload,
      };

    case userActionTypes.SIGNOUT_START:
      return {
        ...state,
      };
    case userActionTypes.SIGNOUT_SUCCESS:
      return {
        ...state,
        currentUser: null,
        error: null,
      };
    case userActionTypes.SIGNOUT_FAILED:
      return {
        ...state,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default userReducer;
