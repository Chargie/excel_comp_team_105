import React from "react";
import "./button.css";

const Button = ({ placeholder, name, type, children }) => {
  return (
    <div className="reuseable-button">
      <button type={type} placeholder={placeholder} name={name}>
        {children}
      </button>
    </div>
  );
};

export default Button;
