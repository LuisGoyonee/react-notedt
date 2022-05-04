import "./App.css";
import Sidebar from "./components/Sidebar/sidebar";
import Topnav from "./components/Topnav/topnav";
import Overview from "./pages/Overview/overview";
import Transactions from "./pages/Transactions/transactions";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="mainContainer">
        <Sidebar />
        <div className="topNavContainer">
          <Topnav />
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
