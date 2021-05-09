import React from "react";
import { connect } from "react-redux";
import CustomButton from "../custom-button/custom-button.component";
import "./cart-dropdownstyles.scss";
import CartItem from "../cart-item/cart-item.component";
import { selectCartItems } from "../../redux/store/cart/cart.selector";
import { withRouter } from "react-router-dom";
import { toggleCartIcon } from "../../redux/store/cart/cart.actions";

const cartDropdown = ({ cartItems, history, dispatch }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.length ? (
        cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))
      ) : (
        <span className="empty-cart">Your cart is empty</span>
      )}
    </div>
    <CustomButton
      onClick={() => {
        history.push("/checkout");
        dispatch(toggleCartIcon());
      }}
    >
      GO TO CHECKOUT
    </CustomButton>
  </div>
);

const mapStateToProps = (state) => {
  return {
    cartItems: selectCartItems(state),
  };
};

export default withRouter(connect(mapStateToProps)(cartDropdown));
