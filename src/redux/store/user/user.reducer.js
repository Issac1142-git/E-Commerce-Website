import { userActionTypes } from "./user.actionTypes";

const initialState = {
  currentUser: null,
  error: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case userActionTypes.GOOGLE_SIGNIN_FAILED:
    case userActionTypes.EMAIL_SIGNIN_FAILED:
      return {
        ...state,
        error: action.payload,
      };
    case userActionTypes.CREATE_USER_SUCCESS:
    case userActionTypes.CREATE_USER_SUCCESS:
    case userActionTypes.GOOGLE_SIGNIN_SUCCESS:
    case userActionTypes.EMAIL_SIGNIN_SUCCESS:
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
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default userReducer;
