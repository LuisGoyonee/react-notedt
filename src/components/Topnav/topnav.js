import React from "react";
import "./topnav.css";
import { FaWallet } from "react-icons/fa";
import { BsSearch } from "react-icons/bs";
import { GoSettings } from "react-icons/go";
import Button from "../Button/button";

const Topnav = () => {
  return (
    <>
      <div class="topNavWrapper">
        <div class="topNav">
          <div class="balance">
            <div id="current">
              <p>Current Balance</p>
            </div>
            <div id="currency">
              <FaWallet />
            </div>
          </div>
          <div class="addTransactions">
            <div class="icon">
              <BsSearch />
            </div>
            <div class="icon">
              <GoSettings />
            </div>
            <div class="icon">
              <Button />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Topnav;
