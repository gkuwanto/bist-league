import React from "react";

const CustomRadio = ({ options, name }) => (
  <div>
    <label htmlFor="{name}">{name.toUpperCase()}</label>
    {options.map((option) => (
      <div key={option.value}>
        <input
          type="radio"
          name="{name}"
          value="{option.value}"
          onClick={option.onClick}
        />
        {option.value}
      </div>
    ))}
  </div>
);

export default CustomRadio;
