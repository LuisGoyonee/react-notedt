import React from "react";
import "./topnav.css";
import Button from "../Button/button";
import { HiOutlineCurrencyDollar } from "react-icons/hi";
import { getTotalSavings } from "../../scripts/local-storage";
import { BsThreeDotsVertical, BsSearch } from "react-icons/bs";

const Topnav = ({ setOpenTransactionModal, setOpenFilterModal, searchBar }) => {
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
            {searchBar && (
              <div className="inputGroup">
                <form className="searchForm">
                  <input
                    type="search"
                    className="searchInput outline-none"
                    placeholder="Search"
                  ></input>
                  <button type="submit" class="searchIcon">
                    <BsSearch size={22} className="cursor-pointer searchIcon" />
                  </button>
                </form>
              </div>
            )}
            <Button
              text="Add Transaction"
              onClick={() => setOpenTransactionModal(true)}
              className="relative flex flex-wrap items-stretch w-full mb-4"
            />
            {searchBar && (
              <BsThreeDotsVertical
                size={20}
                color="black"
                className="threeDots ml-2 relative cursor-pointer"
                onClick={() => setOpenFilterModal(true)}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Topnav;
