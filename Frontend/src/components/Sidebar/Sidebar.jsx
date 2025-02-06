import React, { useContext } from "react";
import "./Sidebar.css";
import { NavLink } from "react-router";

const Sidebar = ({ onItemClick }) => {
  return (
    <>
      <div className="sidebar">
        <div className="title">
          <h3>TASK-MASTER</h3>
        </div>
        <div className="menu">
          <div className="option">
            <NavLink to="dashboard" className="nav">
              <img src="./images/home.png" alt="" />
              <p onClick={() => onItemClick("Dashboard")}>dashboard</p>
            </NavLink>
          </div>
          <div className="option">
            <NavLink to="task" className="nav">
              <img src="./images/checklist.png" alt="" />
              <p onClick={() => onItemClick("Task")}>task</p>
            </NavLink>
          </div>
          <div className="option">
            <NavLink to="completed" className="nav">
              <img src="./images/completed.png" alt="" />
              <p onClick={() => onItemClick("Completed")}>copmpleted</p>
            </NavLink>
          </div>
          <div className="option">
            <NavLink to="submit" className="nav">
              <img src="./images/submit.png" alt="" />
              <p onClick={() => onItemClick("Submitted")}>submitted</p>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
