import React from "react";
import "./cart-item.styles.scss";

const cartItem = ({ item }) => {
  const { imageUrl, name, price, quantity } = item;
  return (
    <div className="cart-item">
      <img src={imageUrl} className="image" alt="Cart_Image" />
      <div className="item-details">
        <span className="name">{name}</span>
        <span className="price">
          {quantity} x Rs{price}
        </span>
      </div>
    </div>
  );
};

export default cartItem;