import React, { useEffect } from "react";
import "./topnav.css";
import Button from "../Button/button";
import { HiOutlineCurrencyDollar } from "react-icons/hi";
import { getTotalSavings } from "../../scripts/local-storage";
import { BsThreeDotsVertical } from "react-icons/bs";
import Searchbar from "../Searchbar/searchbar";
import { useLocation } from "react-router";

const Topnav = ({
  setOpenTransactionModal,
  setOpenFilterModal,
  setTransactionsPage,
  transactionsPage,
  searchKeyword,
  term,
}) => {
  const { pathname } = useLocation();
  const isTransactionsPath = pathname === "/transactions";

  useEffect(() => {
    if (isTransactionsPath) {
      setTransactionsPage(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isTransactionsPath]);
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
            {transactionsPage && pathname === "/transactions" && (
              <Searchbar term={term} searchKeyword={searchKeyword} />
            )}
            <Button
              text="Add Transaction"
              onClick={() => setOpenTransactionModal(true)}
              className="relative flex flex-wrap items-stretch w-full mb-4"
            />
            {transactionsPage && pathname === "/transactions" && (
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
