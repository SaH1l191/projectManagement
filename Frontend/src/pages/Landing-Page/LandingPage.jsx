import React, { Navlink } from "react";
import "./LandingPage.css";
import Login from "../Login/Login";
import SignUp from "../SignUp/SignUp";

const LandingPage = () => {
  return (
    <>
      <div className="LandingPage">
        <div className="navbar">
          <div className="title-name">
            <h3>TASK-MASTER</h3>
          </div>
          <div className="login-side">
            <button
              className="sign-in"
              onClick={() => {
                <SignUp />;
              }}
            >
              sign-in
            </button>

            <button className="sign-up">sign-up</button>
          </div>
        </div>
        <div className="content-wrapper">
          <h3>MANAGE YOUR TASK</h3>
          <p>
            Welcome to TaskMaster! Easily organize tasks, track progress. and
            boost productivity. Say goodbye to chaos, hello to efficiency.
            <br></br> Get started now!
          </p>
          <div className="contentImage">
            <img src="./images/dashboard-landing.PNG" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
