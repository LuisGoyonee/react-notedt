import React from "react";
import { retrieveTransactions } from "../../scripts/local-storage";
import "./transactions.css";
import noTransactions from "../../images/no-transactions.png"

const Transactions = () => {
  let transactions = retrieveTransactions();
  return (
    <>
      {transactions ? (
        <div className="transactionContainer">Hi</div>
      ) : (
        <div className="other">
          <div className="otherContents">
              <img class="noTransactionsVector" src={noTransactions} alt="" />
            <div>
              <p class="noTransactions">NO TRANSACTIONS</p>
            </div>
            <div>
                <p class="noTransactionsDescription">You do not have any transactions yet. Click on the “Add Transactions” button to start tracking your budget.</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Transactions;
