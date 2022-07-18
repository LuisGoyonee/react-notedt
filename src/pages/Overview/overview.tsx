import React, { FC } from "react";
import "./overview.css";
import noTransactions from "../../images/no-transactions.png";
import { checker, retrieveTransactions } from "../../scripts/local-storage";
import DoughnutIncomeChart from "../../components/Charts/Doughnut/doughnutIncomeChart";
import DoughnutExpenseChart from "../../components/Charts/Doughnut/doughnutExpenseChart";
const Overview: FC = () => {
  let checkTransactions = checker();
  const data = retrieveTransactions();

  return (
    <>
      {checkTransactions ? (
        <div className="overviewContainer overflow-auto">
          <div className="headerContainer">
            <div className="headerOverview uppercase">
              Transactions Overview
            </div>
            <div className="description">View your budget report below</div>
          </div>
          <div className="scroll-smooth h-auto">
            <div className="overViewItemsContainer">
              <ul
                className="nav nav-tabs flex flex-col md:flex-row flex-wrap list-none border-b-0 pl-0 mb-4"
                id="tabs-tabFill"
                role="tablist"
              >
                <li
                  className="nav-item flex-auto text-center"
                  role="presentation"
                >
                  <a
                    href="#tabs-homeFill"
                    className="nav-link w-full block font-medium text-xs leading-tight uppercase border-x-0 border-t-0 border-b-2 border-transparent px-6 py-3 my-2 hover:border-transparent hover:bg-gray-100 focus:border-transparent active "
                    id="tabs-home-tabFill"
                    data-bs-toggle="pill"
                    data-bs-target="#tabs-homeFill"
                    role="tab"
                    aria-controls="tabs-homeFill"
                    aria-selected="true"
                  >
                    Income
                  </a>
                </li>
                <li
                  className="nav-item flex-auto text-center"
                  role="presentation"
                >
                  <a
                    href="#tabs-profileFill"
                    className="nav-link w-full block font-medium text-xs leading-tight uppercase border-x-0 border-t-0 border-b-2 border-transparent px-6 py-3 my-2 hover:border-transparent hover:bg-gray-100 focus:border-transparent "
                    id="tabs-profile-tabFill"
                    data-bs-toggle="pill"
                    data-bs-target="#tabs-profileFill"
                    role="tab"
                    aria-controls="tabs-profileFill"
                    aria-selected="false"
                  >
                    Expenses
                  </a>
                </li>
              </ul>
              <div className="tab-content" id="tabs-tabContentFill">
                <div
                  className="tab-pane fade show active"
                  id="tabs-homeFill"
                  role="tabpanel"
                  aria-labelledby="tabs-home-tabFill"
                >
                  <DoughnutIncomeChart
                    allData={data}
                    checker={checkTransactions}
                  />
                </div>
                <div
                  className="tab-pane fade"
                  id="tabs-profileFill"
                  role="tabpanel"
                  aria-labelledby="tabs-profile-tabFill"
                >
                  <DoughnutExpenseChart
                    allData={data}
                    checker={checkTransactions}
                  />
                </div>
              </div>
            </div>
            {/* <div className="overViewItemsContainer"></div> */}
          </div>
        </div>
      ) : (
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
      )}
    </>
  );
};

export default Overview;
