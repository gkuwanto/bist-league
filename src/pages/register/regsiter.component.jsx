import React from "react";

import CustomInput from "../../components/custom-input/custom-input.component";

class RegisterPage extends React.Component {
  constructor() {
    super();

    this.state = {
      name: "",
      email: "",
      phone_number: "",
      institution: "",
      major: "",
      gender: "",
    };
  }

  handleChange = (field) => (event) => {
    this.setState({ [field]: event.target.value });
  };

  render() {
    return (
      <div className="container">
        <form className="register">
          <h3>Create an account</h3>
          <CustomInput
            name="name"
            label="FULL NAME"
            onChange={this.handleChange("name")}
          />
          <CustomInput
            name="email"
            label="email"
            onChange={this.handleChange("email")}
          />
          <CustomInput
            name="phone_number"
            label="PHONE NUMBER"
            details="Please fill this with your active number."
            onChange={this.handleChange("phone_number")}
          />
          <CustomInput
            name="institution"
            label="institution"
            details="Please write your institution / school name without abbreviating its name and please write it in official name, ex: Instititute Teknologi Bandung, not Bandung Institute of Technology"
            onChange={this.handleChange("institution")}
          />
          <CustomInput
            name="major"
            label="major"
            onChange={this.handleChange("major")}
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
