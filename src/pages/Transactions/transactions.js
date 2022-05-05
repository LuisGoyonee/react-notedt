import React from "react";
import { checker, retrieveTransactions } from "../../scripts/local-storage";
import "./transactions.css";
import noTransactions from "../../images/no-transactions.png";
import moment from "moment";
import { IconContext } from "react-icons";
import { BsCircleFill } from "react-icons/bs";
import { HiOutlineTrash } from "react-icons/hi";

const Transactions = ({ onChange }) => {
  let transactions = retrieveTransactions();
  let checkTransactions = checker();

  return (
    <>
      {checkTransactions ? (
        <>
          <div className="transactionContainer overflow-auto">
            <div className="header uppercase">Transaction details</div>
            <div className="transactionItemsContainer">
              {transactions.map((item, index) => {
                const { date, amount, description, category, transactionType } =
                  item;
                return (
                  <div className="transactionItem" key={index}>
                    <div className="leftSideContainer">
                      <div className="transaction-item-date font-normal text-xl">
                        {moment(date).format("D dddd, MMMM  Y")}
                      </div>
                      <div className="pair">
                        <IconContext.Provider
                          value={{
                            color:
                              transactionType === "Income"
                                ? "#00766C"
                                : "#760000",
                            className:
                              "global-class-name transaction-item-icon",
                          }}
                        >
                          <div>
                            <BsCircleFill />
                          </div>
                        </IconContext.Provider>
                        <div className="transaction-item-category">
                          {category}
                        </div>
                      </div>

                      <div className="transaction-item-description ">
                        {description}
                      </div>
                    </div>
                    <div className="rightSideContainer">
                      {transactionType === "Expense" ? (
                        <div className="expense text-lg font-normal">
                          {"- " + amount}
                        </div>
                      ) : (
                        <div className="income text-lg font-normal">
                          {"+ " + amount}
                        </div>
                      )}
                      <HiOutlineTrash size={25} className="ml-2 trash" />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </>
      ) : (
        <div className="other">
          <div className="otherContents">
            <img class="noTransactionsVector" src={noTransactions} alt="" />
            <div>
              <p class="noTransactions">NO TRANSACTIONS</p>
            </div>
            <div>
              <p class="noTransactionsDescription">
                You do not have any transactions yet. Click on the “Add
                Transactions” button to start tracking your budget.
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Transactions;
