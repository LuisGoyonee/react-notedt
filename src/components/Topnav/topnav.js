import React, { useState } from "react";
import "./topnav.css";
import { FaWallet } from "react-icons/fa";
import { BsSearch } from "react-icons/bs";
import { GoSettings } from "react-icons/go";
import Button from "../Button/button";
import TransactionModal from "../Modal/transaction-modal";

const Topnav = () => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <>
      <div className="topNavWrapper">
        <div className="topNav">
          <div className="balance">
            <div id="current">
              <p>Current Balance</p>
            </div>
            <div id="currency">
              <FaWallet size={22} className="wallet" />
              <p id="amount">PHP{}</p>
            </div>
          </div>
          <div className="features">
            <div className="iconsContainer">
              <div className="icon">
                <BsSearch size={22} />
              </div>
              <div className="icon">
                <GoSettings size={22} />
              </div>
            </div>

            <div className="button">
              <Button
                icon={true}
                text="Add Transaction"
                onClick={() => setOpenModal(true)}
              />
            </div>
          </div>
        </div>
      </div>
      {openModal && <TransactionModal close={setOpenModal} open={openModal} />}
    </>
  );
};

export default Topnav;
