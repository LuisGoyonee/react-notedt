import React from "react";
import { FiPlus } from "react-icons/fi";
import "./button.css";

const Button = () => {
  return (
    <>
      <button>
        <div class="mainContainer">
          <div class="buttonContainer">
            <div class="uppercase">Add Transaction</div>
            <FiPlus class="" />
          </div>
        </div>
      </button>
    </>
  );
};

export default Button;
