import "./App.css";
import Sidebar from "./components/Sidebar/sidebar";
import Topnav from "./components/Topnav/topnav";

function App() {
  return (
    <>
      <div className="mainContainer">
        <Sidebar />
        <div className="contents">
          <Topnav />
        </div>
      </div>
    </>
  );
}

export default App;
