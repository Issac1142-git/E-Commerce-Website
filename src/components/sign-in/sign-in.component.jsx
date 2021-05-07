import React, { Component } from "react";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

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
          <label>E-mail</label>
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
          <CustomButton type="submit">SUMBIT</CustomButton>
        </form>
      </div>
    );
  }
}

export default Signin;
