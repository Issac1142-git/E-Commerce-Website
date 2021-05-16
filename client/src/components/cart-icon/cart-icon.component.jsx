import React from "react";
import { connect } from "react-redux";
import { ReactComponent as ShoppingIcon } from "../../assets/images/shoppingBag/buy.svg";
import "./cart-icon.styles.scss";
import { toggleCartIcon } from "../../redux/store/cart/cart.actions";
import { selectCartItemsCount } from "../../redux/store/cart/cart.selector";

const cartIcon = ({ toggleCartIcon, itemsCount }) => {
  // const itemCount = cartItems.reduce((accumulatedQunatity, cartItem) => {
  //   return (accumulatedQunatity = accumulatedQunatity + cartItem.quantity);
  // }, 0);
  return (
    <div className="cart-icon" onClick={toggleCartIcon}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{itemsCount}</span>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    itemsCount: selectCartItemsCount(state),
  };
};

// const mapStateToProps = ({ cart: { cartItems } }) => ({
//   itemQuantity: cartItems.reduce((qty, item) => qty + item.quantity, 0);
// })

const mapDispatchToProps = (dispatch) => {
  return { toggleCartIcon: () => dispatch(toggleCartIcon()) };
};

export default connect(mapStateToProps, mapDispatchToProps)(cartIcon);
