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
              <FaWallet size={22} />
            </div>
          </div>
          <div class="features">
            <div class="iconsContainer">
              <div class="icon">
                <BsSearch size={22} />
              </div>
              <div class="icon">
                <GoSettings size={22} />
              </div>
            </div>

            <div class="button">
              <Button onClick />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Topnav;
