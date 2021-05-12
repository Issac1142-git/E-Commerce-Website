import { cartActionTypes } from "./cart.actionTypes";

export const toggleCartIcon = () => {
  return {
    type: cartActionTypes.TOGGLE_CART_ICON,
  };
};

export const addItems = (item) => {
  return {
    type: cartActionTypes.ADD_ITEMS,
    payload: item,
  };
};

export const removeItems = (item) => {
  return {
    type: cartActionTypes.REMOVE_ITEMS,
    payload: item,
  };
};

export const decreaseItem = (item) => {
  return {
    type: cartActionTypes.DECREASE_ITEMS,
    payload: item,
  };
};

export const clearCartItems = () => {
  return {
    type: cartActionTypes.CLEAR_CART,
  };
};
