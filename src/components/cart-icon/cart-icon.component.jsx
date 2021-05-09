import React from "react";
import { connect } from "react-redux";
import { ReactComponent as ShoppingIcon } from "../../assets/images/shoppingBag/shoppingIcon.svg";
import "./cart-icon.styles.scss";
import { toggleCartIcon } from "../../redux/store/cart/cart.actions";

const cartIcon = ({ toggleCartIcon }) => (
  <div className="cart-icon" onClick={toggleCartIcon}>
    <ShoppingIcon className="shopping-icon" />
    <span className="item-count">0</span>
  </div>
);

const mapDispatchToProps = (dispatch) => {
  return { toggleCartIcon: () => dispatch(toggleCartIcon()) };
};

export default connect(null, mapDispatchToProps)(cartIcon);
