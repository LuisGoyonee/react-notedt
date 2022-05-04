import React from "react";
import { retrieveTransactions } from "../../scripts/local-storage";
import "./transactions.css";

const Transactions = () => {
  let transactions = retrieveTransactions();
  return (
    <>
      {transactions ? (
        <div className="transactionContainer">Hi</div>
      ) : (
        <div className="other">Hello</div>
      )}
    </>
  );
};

export default Transactions;
