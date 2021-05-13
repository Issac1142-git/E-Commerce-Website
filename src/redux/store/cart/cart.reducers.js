import { cartActionTypes } from "./cart.actionTypes";
import { addToItem, decreaseItem } from "./cart.utils";
const initialState = {
  hidden: true,
  cartItems: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case cartActionTypes.CLEAR_CART:
      return {
        ...state,
        cartItems: [],
      };
    case cartActionTypes.TOGGLE_CART_ICON:
      return {
        ...state,
        hidden: !state.hidden,
      };
    case cartActionTypes.ADD_ITEMS:
      return {
        ...state,
        cartItems: addToItem(state.cartItems, action.payload),
      };
    case cartActionTypes.REMOVE_ITEMS:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (cartItem) => cartItem.id !== action.payload.id
        ),
      };
    case cartActionTypes.DECREASE_ITEMS:
      return {
        ...state,
        cartItems: decreaseItem(state.cartItems, action.payload),
      };
    default:
      return state;
  }
};

export default cartReducer;
