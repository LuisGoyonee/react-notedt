import React, {FC} from "react";
import { checker } from "../../scripts/local-storage";
import "./transactions.css";
import noTransactions from "../../images/no-transactions.png";
import moment from "moment";
import { IconContext } from "react-icons";
import { BsCircleFill } from "react-icons/bs";
import { HiOutlineTrash } from "react-icons/hi";
import { TransactionItems } from "../../types/transactions";

type TransactionProps = {
  transactions: TransactionItems[]
}

const Transactions: FC<TransactionProps> = ({ transactions }) => {
  let checkTransactions = checker();

  const renderTransactionsList = () => {
    return (
      <>
        {transactions.length > 0 ? (
          <div className="transaction__wrapper">
            <div className="transaction__header">Transaction details</div>
            <div className="transaction-item__wrapper">
              {transactions.map((item, index) => {
                const { 
                  date,
                  amount,
                  description,
                  category,
                  transactionType
                } = item;
                return (
                  <div 
                    className="transaction__item" 
                    key={index}
                  >
                    <div className="transaction__details">
                      <div className="transaction-item__date">
                        {moment(date).format("D dddd, MMMM  Y")}
                      </div>
                      <div className="transaction__type">
                        <IconContext.Provider
                          value={{
                            color:
                              transactionType === "Income"
                                ? "#00766C"
                                : "#760000",
                            className:"transaction-item__icon",
                          }}
                        >
                          <div>
                            <BsCircleFill />
                          </div>
                        </IconContext.Provider>
                        <div className="transaction-item__category">
                          {category}
                        </div>
                      </div>

                      <div className="transaction-item__description ">
                        {description}
                      </div>
                    </div>
                    <div className="transaction-amount__wrapper">
                      {transactionType === "Expense" ? (
                        <div className="transaction__expense">
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
        ) : (
          <div className="other">
            <div className="otherContents">
              <img className="noTransactionsVector" src={noTransactions} alt="" />
              <div>
                <p className="noTransactions">No transactions match your keyword</p>
              </div>
              <div>
                <p className="noTransactionsDescription">
                  Try searching for a different keyword
                </p>
              </div>
            </div>
          </div>
        )}
      </>
    );
  };

  const renderNoTransactions = () => {
    return (
      <div className="other">
        <div className="otherContents">
          <img className="noTransactionsVector" src={noTransactions} alt="" />
          <div>
            <p className="noTransactions">NO TRANSACTIONS</p>
          </div>
          <div>
            <p className="noTransactionsDescription">
              You do not have any transactions yet. Click on the “Add
              Transactions” button to start tracking your budget.
            </p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>{checkTransactions ? renderTransactionsList() : renderNoTransactions()}</>
  );
};

export default Transactions;
