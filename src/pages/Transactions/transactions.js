import React from "react";
import { retrieveTransactions } from "../../scripts/local-storage";
import "./transactions.css";
import noTransactions from "../../images/no-transactions.png"

const Transactions = () => {
  let transactions = retrieveTransactions();
  return (
    <>
      {transactions ? (
        <div className="transactionContainer">
          <div className="titleContainer">
            <div className="title">
              TRANSACTION DETAILS
            </div>
            <div className="transactionItemsContainer">
              <div className="transactionItem">
                <div className="dateContainer">
                  29 Friday, April 2022
                </div>
                <div className="categoryContainer">
                  <div className="ellipse">
                  </div>
                  SALARY
                </div>
                <div className="descriptionContainer">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint consequatur repellendus aut eos, iure non autem eius magnam, assumenda quaerat sequi molestias eum nostrum voluptates totam cupiditate! Molestias, aut consequatur.
                </div>
              </div>
              <div className="transactionItem">
                <div className="dateContainer">
                  30 Saturday, April 2022
                </div>
                <div className="categoryContainer">
                  <div className="ellipse">
                  </div>
                  RENTAL
                </div>
                <div className="descriptionContainer">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint consequatur repellendus aut eos, iure non autem eius magnam, assumenda quaerat sequi molestias eum nostrum voluptates totam cupiditate! Molestias, aut consequatur.
                </div>
              </div>
            </div>
          </div>
        </div>
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
