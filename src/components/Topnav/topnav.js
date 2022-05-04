import React, { useState } from "react";
import "./topnav.css";
import { BsSearch } from "react-icons/bs";
import Button from "../Button/button";
import { AiOutlineEye } from "react-icons/ai";
import { HiOutlineCurrencyDollar } from "react-icons/hi";
import TransactionModal from "../Modal/transaction-modal";

const Topnav = ({ openModal, setOpenModal }) => {
  return (
    <>
      <div className="topNavWrapper">
        <div className="topNav">
          <div className="balance">
            <div id="current">
              <p className="tracking-wide">Savings</p>
            </div>
            <div id="currency">
              <HiOutlineCurrencyDollar size={22} className="wallet" />
              <p id="savings">PHP{}</p>
            </div>
          </div>
          <div className="features">
            <div className="iconsContainer">
              <div className="icon">
                <BsSearch size={22} />
              </div>
              <div className="icon eye">
                <AiOutlineEye size={30} />
              </div>
            </div>

            <div className="button">
              <Button
                text="Add Transaction"
                onClick={() => setOpenModal(true)}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Topnav;
