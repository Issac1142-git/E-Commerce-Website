import { addToItem, decreaseItem } from "./cart.utils";
const initialState = {
  hidden: true,
  cartItems: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "TOGGLE_CART_ICON":
      return {
        ...state,
        hidden: !state.hidden,
      };
    case "ADD_ITEMS":
      return {
        ...state,
        cartItems: addToItem(state.cartItems, action.payload),
      };
    case "REMOVE_ITEMS":
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (cartItem) => cartItem.id !== action.payload.id
        ),
      };
    case "DECREASE_ITEMS":
      return {
        ...state,
        cartItems: decreaseItem(state.cartItems, action.payload),
      };
    default:
      return state;
  }
};

export default cartReducer;
