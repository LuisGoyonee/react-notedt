import React, { FC } from "react";
import "./button.css";
import { FiPlus } from "react-icons/fi";

type ButtonProps = {
  text: string;
  onClick: () => void;
}
const Button: FC<ButtonProps> = ({ text, onClick}) => {

  return (
    <>
      <button onClick={onClick}>
        <div className="buttonContainer py-3 px-3">
          <FiPlus className="plusIcon" size={20} />
          <div className="uppercase addTransaction">{text}</div>
        </div>
      </button>
    </>
  );
};

export default Button;
