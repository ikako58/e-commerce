import React from "react";
import "./button.css";

const Button = ({ text, onclick }) => {
  return (
    <button className="maxi-button" onClick={onclick}>
      {text}
    </button>
  );
};

export default Button;
