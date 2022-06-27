import "./App.css";
import Sidebar from "./components/Sidebar/sidebar";
import Topnav from "./components/Topnav/topnav";
import Overview from "./pages/Overview/overview";
import Transactions from "./pages/Transactions/transactions";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TransactionModal from "./components/Modal/TransactionModal/transaction-modal";
import { useState } from "react";
import Footer from "./components/Footer/footer";
import FilterModal from "./components/Modal/FilterModal/filter-modal";
import { retrieveTransactions } from "./scripts/local-storage";

function App() {
  let transactions = retrieveTransactions();
  const [openTransactionModal, setOpenTransactionModal] = useState(false);
  const [openFilterModal, setOpenFilterModal] = useState(false);
  const [transactionsPage, setTransactionsPage] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const searchHandler = (searchTerm) => {
    setSearchTerm(searchTerm);
    if (searchTerm !== "") {
      const newTransactionsList = transactions.filter((item) => {
        return Object.values(item)
          .join("")
          .toLowerCase()
          .includes(searchTerm.toLowerCase());
      });
      setSearchResults(newTransactionsList);
    } else {
      setSearchResults(transactions);
    }
  };
  console.log(transactions);
  return (
    <Router>
      {openTransactionModal && (
        <TransactionModal close={setOpenTransactionModal} />
      )}
      {openFilterModal && (
        <FilterModal close={setOpenFilterModal} open={openFilterModal} />
      )}
      <div className="mainContainer">
        <Sidebar
          transactionsPage={transactionsPage}
          setTransactionsPage={setTransactionsPage}
        />
        <div className="mainBodyContainer">
          <Topnav
            setOpenTransactionModal={setOpenTransactionModal}
            setOpenFilterModal={setOpenFilterModal}
            transactionsPage={transactionsPage}
            searchKeyword={searchHandler}
            term={searchTerm}
          />
          <Routes>
            <Route path="/" element={<Overview />} />
            <Route
              path="/transactions"
              element={
                <Transactions
                  searchTerm={searchTerm}
                  setSearchTerm={setSearchTerm}
                  transactions={
                    searchTerm.length < 1 ? transactions : searchResults
                  }
                />
              }
            />
          </Routes>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
