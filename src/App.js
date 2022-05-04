import "./App.css";
import Sidebar from "./components/Sidebar/sidebar";
import Topnav from "./components/Topnav/topnav";
import Overview from "./pages/Overview/overview";
import Transactions from "./pages/Transactions/transactions";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TransactionModal from "./components/Modal/transaction-modal";
import { useState } from "react";

function App() {
  const [openModal, setOpenModal] = useState(false);
  console.log(openModal);
  return (
    <Router>
      {openModal && <TransactionModal close={setOpenModal} />}
      <div className="mainContainer">
        <Sidebar />
        <div className="topNavContainer">
          <Topnav setOpenModal={setOpenModal} />
          <Routes>
            <Route path="/" element={<Transactions />} />
            <Route path="/overview" element={<Overview />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
