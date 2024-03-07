import React from "react";
import { Tabs } from "../../constants/tabs";
import logo from "../../images/Logo.png";
import "./sidebar.css";
import { Link, NavLink } from "react-router-dom";

const Sidebar = ({ transactionsPage, setTransactionsPage }) => {
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
                activeclassname="active"
                onClick={() => {
                  if (tabName === "Overview") {
                    setTransactionsPage(false);
                  } else {
                    setTransactionsPage(true);
                  }
                }}
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
