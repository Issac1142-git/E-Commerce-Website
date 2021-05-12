import React, { Component } from "react";
import { connect } from "react-redux";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import "./sign-in.styles.scss";
import {
  googleSigninStart,
  emailSigninStart,
} from "../../redux/store/user/user.actions";

class Signin extends Component {
  state = {
    email: "",
    password: "",
  };

  formSubmitHandler = (event) => {
    event.preventDefault();
    const { emailSigninStart } = this.props;
    const { email, password } = this.state;
    emailSigninStart(email, password);
  };

  inputChangeHandler = (event) => {
    let { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    const { signInWithGoogle } = this.props;
    return (
      <div className="sign-in">
        <h1 className="title">I already have an account</h1>
        <span>Signin with your email and password</span>

        <form onSubmit={this.formSubmitHandler}>
          <FormInput
            type="email"
            name="email"
            onChanged={this.inputChangeHandler}
            value={this.state.email}
            label="E-mail"
          ></FormInput>
          <FormInput
            type="password"
            name="password"
            onChange={this.inputChangeHandler}
            value={this.state.password}
            label="Password"
          ></FormInput>
          <div className="buttons">
            <CustomButton type="submit">SUMBIT</CustomButton>
            <CustomButton
              type="button"
              onClick={signInWithGoogle}
              isGoogleSignin
            >
              Signin with Google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signInWithGoogle: () => dispatch(googleSigninStart()),
    emailSigninStart: (email, password) =>
      dispatch(emailSigninStart({ email, password })),
  };
};

export default connect(null, mapDispatchToProps)(Signin);
