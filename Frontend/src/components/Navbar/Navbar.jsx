import React, { useContext } from "react";
import "./Navbar.css";

const Navbar = ({ selectedItem }) => {
  return (
    <>
      <div className="Navbar">
        <div className="left-side">
          <h3>{selectedItem}</h3>
        </div>
        <div className="middle-side">
          <h3>Project Name</h3>
        </div>
        <div className="right-side">
          <p>USer Name</p>
        </div>
      </div>
    </>
  );
};

export default Navbar;
