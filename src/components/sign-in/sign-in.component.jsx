import React, { Component } from "react";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { signInWithGoogle } from "../../firebase/firebase.utils";
import "./sign-in.styles.scss";

class Signin extends Component {
  state = {
    email: "",
    password: "",
  };

  formSubmitHandler = (event) => {
    event.preventDefault();
  };

  inputChangeHandler = (event) => {
    let { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  render() {
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
            <CustomButton onClick={signInWithGoogle} isGoogleSignin>
              Signin with Google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default Signin;
