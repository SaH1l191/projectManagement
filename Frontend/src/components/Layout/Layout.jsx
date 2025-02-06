import React, { useState } from "react";
import "./Layout.css";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import { Outlet } from "react-router";

const Layout = () => {
  const [selectedItem, setSelectedItem] = useState("Dashboard");

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };
  return (
    <>
      <div className="Layout">
        <Navbar selectedItem={selectedItem} />
        <Sidebar onItemClick={handleItemClick} />
        <div className="content-area">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Layout;
