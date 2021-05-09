export const addToItem = (cartItems, itemsToAdd) => {
  const existingCartItems = cartItems.find((cartItem) => {
    return cartItem.id === itemsToAdd.id;
  });
  if (existingCartItems) {
    return cartItems.map((cartItem) =>
      cartItem.id === itemsToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }
  return [...cartItems, { ...itemsToAdd, quantity: 1 }];
};
