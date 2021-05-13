import React from "react";
import { connect } from "react-redux";
import FormInput from "../form-input/form-input.component";
import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";
import CustomButton from "../custom-button/custom-button.component";
import { signupStart } from "../../redux/store/user/user.actions";
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

    const { signupStart } = this.props;
    if (password !== confirmPassword) {
      alert("password not matching");
      return;
    }
    signupStart(email, password, displayName);
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
const mapDispatchToProps = (dispatch) => ({
  signupStart: (email, password, displayName) =>
    dispatch(signupStart({ email, password, displayName })),
});

export default connect(null, mapDispatchToProps)(Signup);
