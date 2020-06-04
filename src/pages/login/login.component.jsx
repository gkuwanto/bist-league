import React from "react";

import { Link } from "react-router-dom";

import CustomInput from "../../components/custom-input/custom-input.component";
import CustomButton from "../../components/custom-button/custom-button.component";

import "./login.style.scss";

class LoginPage extends React.Component {
  constructor() {
    super();

    this.state = {
      email: "",
      password: "",
    };
  }

  handleText = (field) => (event) => {
    this.setState({ [field]: event.target.value });
  };

  render() {
    return (
      <div className="container">
        <form className="register">
          <h3>Welcome Back!</h3>
          <CustomInput
            name="email"
            label="email"
            onChange={this.handleText("email")}
          />
          <CustomInput
            name="password"
            label="Password"
            onChange={this.handleText("password")}
          />
          <Link to="/">Forgot your password?</Link>
          <CustomButton
            onClick={(event) => {
              console.log(this.state);
              event.preventDefault();
            }}
            name="login"
          />
        </form>
        <span>
          Don't have an account ?<Link to="/register">Register</Link>
        </span>
      </div>
    );
  }
}

export default LoginPage;
