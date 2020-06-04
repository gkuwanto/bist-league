import React from "react";

import "./custom-button.style.scss";

const CustomButton = ({ children, onClick }) => (
  <div className="input-container">
    <button onClick={onClick}>{children.toUpperCase()}</button>
  </div>
);

export default CustomButton;
