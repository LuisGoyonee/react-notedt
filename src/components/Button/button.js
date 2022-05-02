import React from "react";
import { FiPlus } from "react-icons/fi";
import "./button.css";

const Button = () => {
  return (
    <>
      <button>
        <div class="mainContainer">
          <div class="buttonContainer py-2 px-3">
            <div class="uppercase addTransaction">Add Transaction</div>
            <FiPlus class="btn" size={18} />
          </div>
        </div>
      </button>
    </>
  );
};

export default Button;
