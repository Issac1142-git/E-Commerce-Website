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
