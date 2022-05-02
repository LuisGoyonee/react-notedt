import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Transactions from "../../pages/Transactions/transactions";
import Categories from "../../pages/Categories/categories";
import Overview from "../../pages/Overview/overview";
import { BsArrowLeftRight } from "react-icons/bs";
import { FaTags } from "react-icons/fa";
import { AiFillPieChart } from "react-icons/ai";
import logo from "../../images/Logo.png";
import "./sidebar.css";
import Topnav from "../Topnav/topnav";

const Sidebar = () => {
  const [activeTab, setActiveTab] = useState(false);
  return (
    <>
      <Router>
        <div class="mainContainer">
          <div class="sideBarWrapper">
            <div class="sideBar">
              <div class="sideBarLogo">
                <Link to="/transactions">
                  <img
                    src={logo}
                    alt="logo"
                    className="logo cursor-pointer"
                    width="40"
                    height="32"
                  />
                </Link>
              </div>
              <div class="sideBarLinks uppercase text-lg">
                <Link to="/transactions" class="pt-8 navLink">
                  <BsArrowLeftRight size={40} />
                  <p class="sideText">Transactions</p>
                </Link>
                <Link to="/categories" class="pt-8 navLink">
                  <FaTags size={40} />
                  <p class="sideText">Categories</p>
                </Link>
                <Link to="/overview" class="pt-8 navLink">
                  <AiFillPieChart size={40} />
                  <p class="sideText">Overview</p>
                </Link>
              </div>
            </div>
          </div>
          <div class="contents">
            <Topnav />
          </div>
        </div>

        <Routes>
          <Route path="/transactions" element={<Transactions />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/overview" element={<Overview />} />
        </Routes>
      </Router>
    </>
  );
};

export default Sidebar;
