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

function App() {
  const [openTransactionModal, setOpenTransactionModal] = useState(false);
  const [openFilterModal, setOpenFilterModal] = useState(false);
  const [transactionsPage, setTransactionsPage] = useState(false);

  const [searchTerm, setSearchTerm] = useState("");
  const searchHandler = (searchTerm) => {
    console.log(searchTerm);
  };
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
            term={searchTerm}
            searchKeyword={searchHandler}
          />
          <Routes>
            <Route path="/" element={<Overview />} />
            <Route path="/transactions" element={<Transactions />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
