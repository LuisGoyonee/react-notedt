import React from "react";
import "./topnav.css";
import Button from "../Button/button";
import { HiOutlineCurrencyDollar } from "react-icons/hi";
import { getTotalSavings } from "../../scripts/local-storage";
import { BsThreeDotsVertical, BsSearch } from "react-icons/bs";

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
              <p id="savings">{"PHP " + getTotalSavings()}</p>
            </div>
          </div>
          <div className="features">
            <div className="inputGroup">
              <div className="relative flex flex-row items-stretch w-full mb-4">
                <input
                  type="search"
                  className="input searchInput outline-none"
                  placeholder="Search"
                ></input>
                <div class="search">
                  <BsSearch size={22} className="cursor-pointer searchIcon" />
                </div>
              </div>
            </div>
            <Button
              text="Add Transaction"
              onClick={() => setOpenModal(true)}
              className="relative flex flex-wrap items-stretch w-full mb-4"
            />
            <BsThreeDotsVertical
              size={20}
              color="black"
              className="threeDots ml-2 relative"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Topnav;
