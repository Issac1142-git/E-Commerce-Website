import React from "react";
import StripeCheckout from "react-stripe-checkout";

const stripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51ISkEYIt0zrohrePWhCcQJnjdyDIAu6s5fhYKTjAItyj3OUe3ahtlTnq0ne9jdYW4p1OxglAvyHAwzC9EIsd0kcR00Y4pdalgy";

  const onToken = (token) => {
    console.log(token);
    alert("Payment Successful");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="E-Commerce"
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total price is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default stripeCheckoutButton;
