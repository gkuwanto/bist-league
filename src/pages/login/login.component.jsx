import React from "react";

import CustomInput from "../../components/custom-input/custom-input.component";

class RegisterPage extends React.Component {
  constructor() {
    super();

    this.state = {
      email: "",
      password: "",
    };
  }

  handleChange = (field) => (event) => {
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
            onChange={this.handleChange("email")}
          />
          <CustomInput
            name="password"
            label="Password"
            onChange={this.handleChange("password")}
          />
          <button
            onClick={(event) => {
              console.log(this.state);
              event.preventDefault();
            }}
          >
            CREATE ACCOUNT
          </button>
        </form>
      </div>
    );
  }
}

export default RegisterPage;
