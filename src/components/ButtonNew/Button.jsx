import React from "react";
import "./Button.css";
const Button = ({
  variant = "primary",
  size = "medium",
  color ='white',
  children,
  handleClick,
  ...args
}) => {
  return (
    <button
      className={`button ${variant} ${size} ${color}`}
      onClick={() => handleClick()}
    >
      {children}
    </button>
  );
};

export default Button;


