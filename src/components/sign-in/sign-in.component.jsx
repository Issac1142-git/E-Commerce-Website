import React, { useState } from "react";
import { connect } from "react-redux";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import "./sign-in.styles.scss";
import {
  googleSigninStart,
  emailSigninStart,
} from "../../redux/store/user/user.actions";

const signin = ({ emailSigninStart, signInWithGoogle }) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const { email, password } = credentials;

  const formSubmitHandler = (event) => {
    event.preventDefault();
    emailSigninStart(email, password);
  };

  const inputChangeHandler = (event) => {
    let { name, value } = event.target;
    setCredentials({
      ...credentials,
      [name]: value,
    });
  };

  return (
    <div className="sign-in">
      <h1 className="title">I already have an account</h1>
      <span>Signin with your email and password</span>

      <form onSubmit={formSubmitHandler}>
        <FormInput
          type="email"
          name="email"
          onChanged={inputChangeHandler}
          value={email}
          label="E-mail"
        ></FormInput>
        <FormInput
          type="password"
          name="password"
          onChange={inputChangeHandler}
          value={password}
          label="Password"
        ></FormInput>
        <div className="buttons">
          <CustomButton type="submit">SUMBIT</CustomButton>
          <CustomButton type="button" onClick={signInWithGoogle} isGoogleSignin>
            Signin with Google
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    signInWithGoogle: () => dispatch(googleSigninStart()),
    emailSigninStart: (email, password) =>
      dispatch(emailSigninStart({ email, password })),
  };
};

export default connect(null, mapDispatchToProps)(signin);
