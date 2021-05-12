import React from "react";
import FormInput from "../form-input/form-input.component";
import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";
import CustomButton from "../custom-button/custom-button.component";
import { createUserStart } from "../../redux/store/user/user.actions";
import "./signup.styles.scss";

class Signup extends React.Component {
  state = {
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  onSubmitHandler = async (event) => {
    event.preventDefault();
    const { email, password, confirmPassword, displayName } = this.state;

    if (password !== confirmPassword) {
      alert("password not matching");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      await createUserProfileDocument(user, { displayName });
      this.setState({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    } catch (error) {
      console.log("error", error.message);
    }
  };

  inputChangedHandler = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    return (
      <div className="signup">
        <h1 className="title">Don't have a account?</h1>
        <span>Signup with Email and Password</span>
        <form onSubmit={this.onSubmitHandler}>
          <FormInput
            type="text"
            name="displayName"
            value={displayName}
            onChanged={this.inputChangedHandler}
            label="Display Name"
          />
          <FormInput
            type="email"
            name="email"
            value={email}
            onChanged={this.inputChangedHandler}
            label="E-mail"
          />
          <FormInput
            type="password"
            name="password"
            value={password}
            onChanged={this.inputChangedHandler}
            label="Password"
          />
          <FormInput
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            onChanged={this.inputChangedHandler}
            label="Confirm Password"
          />
          <CustomButton type="submit">SIGNUP</CustomButton>
        </form>
      </div>
    );
  }
}

export default Signup;
