import React from "react";
import { connect } from "react-redux";
import {
  removeItems,
  addItems,
  decreaseItem,
} from "../../redux/store/cart/cart.actions";
import "./checkout-items.styles.scss";

const checkoutItem = ({ cartItem, removeItems, addItems, decreaseItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img alt="item" src={imageUrl}></img>
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={() => decreaseItem(cartItem)}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={() => addItems(cartItem)}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={() => removeItems(cartItem)}>
        &#10005;
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeItems: (item) => dispatch(removeItems(item)),
    addItems: (item) => dispatch(addItems(item)),
    decreaseItem: (item) => dispatch(decreaseItem(item)),
  };
};
export default connect(null, mapDispatchToProps)(checkoutItem);
