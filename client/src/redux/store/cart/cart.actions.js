import { cartActionTypes } from "./cart.actionTypes";

export const toggleCartIcon = () => {
  return {
    type: "TOGGLE_CART_ICON",
  };
};

export const addItems = (item) => {
  return {
    type: "ADD_ITEMS",
    payload: item,
  };
};

export const removeItems = (item) => {
  return {
    type: "REMOVE_ITEMS",
    payload: item,
  };
};

export const decreaseItem = (item) => {
  return {
    type: "DECREASE_ITEMS",
    payload: item,
  };
};

export const clearCartItems = () => ({
  type: cartActionTypes.CLEAR_CART,
});
