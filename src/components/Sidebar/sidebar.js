import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  NavLink,
} from "react-router-dom";
import Transactions from "../../pages/Transactions/transactions";
import Categories from "../../pages/Categories/categories";
import Overview from "../../pages/Overview/overview";
import { BsArrowLeftRight } from "react-icons/bs";
import { FaTags } from "react-icons/fa";
import { AiFillPieChart } from "react-icons/ai";
import logo from "../../images/Logo.png";
import "./sidebar.css";

const Sidebar = () => {
  const [activeTab, setActiveTab] = useState("Transactions");
  const tabs = [
    {
      tabName: "Transactions",
      pathName: "/",
      icon: <BsArrowLeftRight size={40} />,
    },
    {
      tabName: "Cateogries",
      pathName: "/categories",
      icon: <FaTags size={40} />,
    },
    {
      tabName: "Overview",
      pathName: "/overview",
      icon: <AiFillPieChart size={40} />,
    },
  ];

  const onClick = (tab) => () => {
    setActiveTab(tab);
  };
  useEffect(() => {}, [activeTab]);

  return (
    <>
      <Router>
        <div className="sideBarWrapper">
          <div className="sideBar">
            <div className="sideBarLogo">
              <Link to="/">
                <img
                  src={logo}
                  alt="logo"
                  className="logo cursor-pointer"
                  width="40"
                  height="32"
                />
              </Link>
            </div>
            <div className="sideBarLinks uppercase text-base">
              {tabs.map(({ tabName, pathName, icon }) => (
                <NavLink
                  className="pt-8 navLink"
                  to={pathName}
                  key={tabName}
                  activeClassName="active"
                  onClick={onClick(tabName)}
                >
                  {icon}
                  {tabName}
                </NavLink>
              ))}
            </div>
          </div>
        </div>

        <Routes>
          <Route path="/" element={<Transactions />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/overview" element={<Overview />} />
        </Routes>
      </Router>
    </>
  );
};

export default Sidebar;
