import "./App.css";
import Sidebar from "./components/Sidebar/sidebar";
import Topnav from "./components/Topnav/topnav";
import Overview from "./pages/Overview/overview";
import Transactions from "./pages/Transactions/transactions";

function App() {
  return (
    <>
      <div className="mainContainer">
        <Sidebar />
        <div className="contents">
          <Topnav />
          <Transactions />
          <Overview />
        </div>
      </div>
    </>
  );
}

export default App;
