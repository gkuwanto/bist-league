import React from "react";

import "./custom-button.style.scss";

const CustomButton = ({ name, onClick }) => (
  <div className="button-container">
    <button onClick={onClick}>{name.toUpperCase()}</button>
  </div>
);

export default CustomButton;
