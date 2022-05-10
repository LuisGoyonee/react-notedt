import React from "react";
import "./button.css";
import { FiPlus } from "react-icons/fi";

const Button = ({ text, onClick, className }) => {
  return (
    <>
      <button onClick={onClick}>
        <div className="buttonContainer py-3 px-3">
          <FiPlus class="plusIcon" size={20} />
          <div className="uppercase addTransaction">{text}</div>
        </div>
      </button>
    </>
  );
};

export default Button;
