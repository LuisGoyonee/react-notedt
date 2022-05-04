import React from "react";
import "./transactions.css";

const Transactions = () => {
  let keys = Object.keys(localStorage);
  // for (let key of keys) {
  //   console.log(`${key}: ${localStorage.getItem(key)}`);
  // }
  return (
    <>
      {keys ? (
        <div className="transactionContainer">Hi</div>
      ) : (
        <div className="other"></div>
      )}
    </>
  );
};

export default Transactions;
