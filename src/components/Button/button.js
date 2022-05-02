import React from "react";
import { FiPlus } from "react-icons/fi";
import "./button.css";

const Button = ({ text, icon, onClick }) => {
  console.log(icon);
  return (
    <>
      <button onClick={onClick}>
        <div className="mainContainer">
          <div className="buttonContainer py-2 px-3">
            <div className="uppercase addTransaction">{text}</div>
            {icon ? <FiPlus className="btn" size={18} /> : null}
          </div>
        </div>
      </button>
    </>
  );
};

export default Button;
