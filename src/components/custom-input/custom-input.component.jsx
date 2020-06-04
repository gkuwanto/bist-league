import React from "react";

import "./custom-input.style.scss";

const CustomInput = ({ label, name, details, onChange }) => (
  <div className="input-container">
    <label htmlFor="{name}">{label.toUpperCase()}</label>
    {details ? <p>{details}</p> : null}
    <input type="text" name={name} onChange={onChange} />
  </div>
);

export default CustomInput;
