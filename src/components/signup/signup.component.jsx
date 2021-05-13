import React, { useState } from "react";
import { connect } from "react-redux";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { signupStart } from "../../redux/store/user/user.actions";
import "./signup.styles.scss";

const signup = ({ signupStart }) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [credentials, setCredentials] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    const { email, password, confirmPassword, displayName } = credentials;

    if (password !== confirmPassword) {
      alert("password not matching");
      return;
    }
    signupStart({ email, password, displayName });
  };

  const inputChangedHandler = (event) => {
    const { name, value } = event.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const { displayName, email, password, confirmPassword } = credentials;
  return (
    <div className="signup">
      <h1 className="title">Don't have a account?</h1>
      <span>Signup with Email and Password</span>
      <form onSubmit={onSubmitHandler}>
        <FormInput
          type="text"
          name="displayName"
          value={displayName}
          onChanged={inputChangedHandler}
          label="Display Name"
        />
        <FormInput
          type="email"
          name="email"
          value={email}
          onChanged={inputChangedHandler}
          label="E-mail"
        />
        <FormInput
          type="password"
          name="password"
          value={password}
          onChanged={inputChangedHandler}
          label="Password"
        />
        <FormInput
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          onChanged={inputChangedHandler}
          label="Confirm Password"
        />
        <CustomButton type="submit">SIGNUP</CustomButton>
      </form>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  signupStart: (credentials) => dispatch(signupStart(credentials)),
});

export default connect(null, mapDispatchToProps)(signup);
