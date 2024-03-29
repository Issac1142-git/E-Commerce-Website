import React from "react";
import { connect } from "react-redux";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
import { clearCartItems } from "../../redux/store/cart/cart.actions";

const stripeCheckoutButton = ({ price, clearCart }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51ISkEYIt0zrohrePWhCcQJnjdyDIAu6s5fhYKTjAItyj3OUe3ahtlTnq0ne9jdYW4p1OxglAvyHAwzC9EIsd0kcR00Y4pdalgy";

  const onToken = (token) => {
    // console.log(token);
    // alert("Payment Successful");
    axios({
      url: "payment",
      method: "post",
      data: {
        amount: priceForStripe,
        token: token,
      },
    })
      .then((res) => {
        // console.log(res);

        alert("Your payment Success");
        clearCart();
      })
      .catch((err) => {
        // console.log("err", JSON.parse(err));
        alert("payment failed");
      });
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="E-Commerce"
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total price is Rs${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
      currency="inr"
    />
  );
};

const mapDispatchToProps = (dispatch) => ({
  clearCart: () => dispatch(clearCartItems()),
});

export default connect(null, mapDispatchToProps)(stripeCheckoutButton);
