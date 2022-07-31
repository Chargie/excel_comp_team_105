import React from "react";
import "./input.css";

const Input = ({ name, type, placeholder }) => {
  return (
    <div className="input-container" >
      <label htmlFor={name}>{name}</label>
      <input type={type} name={name} placeholder={placeholder} />
    </div>
  );
};

export default Input;
