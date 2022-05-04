import React from "react";
import "./button.css";

const Button = ({ text, onClick, className }) => {
  return (
    <>
      <button onClick={onClick}>
        <div className={className}>
          <div className="buttonContainer py-2 px-3">
            <div className="uppercase addTransaction">{text}</div>
          </div>
        </div>
      </button>
    </>
  );
};

export default Button;
