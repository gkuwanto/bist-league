import React from "react";

import { Link } from "react-router-dom";

import CustomInput from "../../components/custom-input/custom-input.component";
import CustomRadio from "../../components/custom-radio/custom-radio.component";
import CustomButton from "../../components/custom-button/custom-button.component";

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

  handleText = (field) => (event) => {
    this.setState({ [field]: event.target.value });
  };

  handleRadio = (gender) => (event) => {
    this.setState({ gender });
  };

  render() {
    return (
      <div className="container">
        <form className="register">
          <h3>Create an account</h3>
          <CustomInput
            name="name"
            label="FULL NAME"
            onChange={this.handleText("name")}
          />
          <CustomInput
            name="email"
            label="email"
            onChange={this.handleText("email")}
          />
          <CustomInput
            name="phone_number"
            label="PHONE NUMBER"
            details="Please fill this with your active number."
            onChange={this.handleText("phone_number")}
          />
          <CustomInput
            name="institution"
            label="institution"
            details="Please write your institution / school name without abbreviating its name and please write it in official name, ex: Instititute Teknologi Bandung, not Bandung Institute of Technology"
            onChange={this.handleText("institution")}
          />
          <CustomInput
            name="major"
            label="major"
            onChange={this.handleText("major")}
          />

          <CustomRadio
            name="gender"
            options={[
              { value: "Male", onClick: this.handleRadio("Male") },
              { value: "Female", onClick: this.handleRadio("Female") },
              {
                value: "Prefer not to say",
                onClick: this.handleRadio("Other"),
              },
            ]}
          />

          <CustomButton
            onClick={(event) => {
              console.log(this.state);
              event.preventDefault(); // Biar ga ngejalanin actionnya form
            }}
            name="CREATE ACCOUNT"
          />
        </form>
        <Link to="/login">Already have an account?</Link>
      </div>
    );
  }
}

export default RegisterPage;
