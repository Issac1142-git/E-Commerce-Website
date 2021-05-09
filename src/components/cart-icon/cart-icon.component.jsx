import React from "react";
import { connect } from "react-redux";
import { ReactComponent as ShoppingIcon } from "../../assets/images/shoppingBag/shoppingIcon.svg";
import "./cart-icon.styles.scss";
import { toggleCartIcon } from "../../redux/store/cart/cart.actions";

const cartIcon = ({ toggleCartIcon, cartItems }) => {
  const itemCount = cartItems.reduce((accumulatedQunatity, cartItem) => {
    return (accumulatedQunatity = accumulatedQunatity + cartItem.quantity);
  }, 0);
  return (
    <div className="cart-icon" onClick={toggleCartIcon}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{itemCount}</span>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cartItems: state.cart.cartItems,
  };
};

// const mapStateToProps = ({ cart: { cartItems } }) => ({
//   itemQuantity: cartItems.reduce((qty, item) => qty + item.quantity, 0);
// })

const mapDispatchToProps = (dispatch) => {
  return { toggleCartIcon: () => dispatch(toggleCartIcon()) };
};

export default connect(mapStateToProps, mapDispatchToProps)(cartIcon);
