import { SHOP_DATA } from "./shop.data.jsx";

const initialState = {
  collections: SHOP_DATA,
};

export const shopReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
