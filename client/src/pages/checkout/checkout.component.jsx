import React from "react";
import { connect } from "react-redux";
import "./checkout.styles.scss";
import { createStructuredSelector } from "reselect";
import {
  selectCartItems,
  selectCartTotalPrice,
} from "../../redux/store/cart/cart.selector";
import CheckoutItem from "../../components/checkout-items/checkout-items.component";
import StripeCheckoutButton from "../../components/stripe-button/stripe-button";

const checkout = ({ cartItems, price }) => {
  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={Math.random() * 40} cartItem={cartItem} />
      ))}
      <div className="total">Total Price: Rs{price}</div>
      <div className="test-warning">
        *Please use the following test credit card numbers for payments*
        <br />
        4242 4242 4242 4242 Exp: Any Future Date Cvv: four digit number
      </div>
      <StripeCheckoutButton price={price} />
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  price: selectCartTotalPrice,
});

export default connect(mapStateToProps)(checkout);
