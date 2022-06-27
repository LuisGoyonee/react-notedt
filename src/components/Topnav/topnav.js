import React from "react";
import "./topnav.css";
import Button from "../Button/button";
import { HiOutlineCurrencyDollar } from "react-icons/hi";
import { getTotalSavings } from "../../scripts/local-storage";
import { BsThreeDotsVertical } from "react-icons/bs";
import Searchbar from "../Searchbar/searchbar";

const Topnav = ({
  setOpenTransactionModal,
  setOpenFilterModal,
  transactionsPage,
  searchKeyword,
  term,
}) => {
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
            {transactionsPage && (
              <Searchbar term={term} searchKeyword={searchKeyword} />
            )}
            <Button
              text="Add Transaction"
              onClick={() => setOpenTransactionModal(true)}
              className="relative flex flex-wrap items-stretch w-full mb-4"
            />
            {transactionsPage && (
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
