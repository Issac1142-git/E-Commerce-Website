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

export const decreaseItem = (cartItems, itemsToDecrease) => {
  const existingCartItems = cartItems.find(
    (cartItem) => cartItem.id === itemsToDecrease.id
  );

  if (existingCartItems.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== itemsToDecrease.id);
  }
  return cartItems.map((cartItem) =>
    cartItem.id === itemsToDecrease.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};
