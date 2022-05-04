import React, { useEffect, useState } from "react";

import Transactions from "../../pages/Transactions/transactions";
import Overview from "../../pages/Overview/overview";
import { Tabs } from "../../constants/tabs";
import logo from "../../images/Logo.png";
import "./sidebar.css";
import { Link, NavLink } from "react-router-dom";

const Sidebar = () => {
  const [activeTab, setActiveTab] = useState("Transactions");

  const onClick = (tab) => () => {
    setActiveTab(tab);
  };
  useEffect(() => {}, [activeTab]);

  return (
    <>
      <div className="sideBarWrapper">
        <div className="sideBar">
          <div className="sideBarLogo">
            <Link to="/">
              <img
                src={logo}
                alt="logo"
                className="logo cursor-pointer"
                width="60"
                height="52"
              />
            </Link>
          </div>
          <div className="sideBarLinks text-base">
            {Tabs.map(({ tabName, pathName, icon }) => (
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
    </>
  );
};

export default Sidebar;
