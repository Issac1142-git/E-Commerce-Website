import React from "react";
import Signin from "../../components/sign-in/sign-in.component";
import Signup from "../../components/signup/signup.component";
import "./sign-in-and-sign-out.styles.scss";

const signInAndSignOut = () => (
  <div className="signin-signup">
    <Signin />
    <Signup />
  </div>
);

export default signInAndSignOut;
