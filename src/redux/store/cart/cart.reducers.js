import { addToItem } from "./cart.utils";
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
    default:
      return state;
    case "ADD_ITEMS":
      return {
        ...state,
        cartItems: addToItem(state.cartItems, action.payload),
      };
  }
};

export default cartReducer;
