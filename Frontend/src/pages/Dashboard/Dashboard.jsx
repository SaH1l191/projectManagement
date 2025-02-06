import React from "react";
import "./Dashboard.css";
import ChartOne from "../../components/Charts/ChartOne";
import ChartTwo from "../../components/Charts/ChartTwo";
import ChartThree from "../../components/Charts/ChartThree";

const Dashboard = () => {
  return (
    <div className="dash">
      <div class="box box1">
        <div className="text">
          <h2>welcome to</h2>
          <h1>Your Task Management Area</h1>
        </div>
        {/* <img
          src="./images/task-area.jpg"
          alt=""
          style={{ width: "440px", height: "220px" }}
        /> */}
      </div>
      <div class="box box2">
        <div className="text-container">
          <h3>COMPLETED TASK</h3>
        </div>
        <div className="pie-chart">
          <ChartOne />
        </div>
      </div>
      <div class="box box3">
        <div className="text-container">
          <h3>SUBMITTED TASK</h3>
        </div>
        <div className="pie-chart">
          <ChartTwo />
        </div>
      </div>
      <div class="box box4">
        <div className="text-container">
          <h3>PENDING TASK</h3>
        </div>
        <div className="pie-chart">
          <ChartThree />
        </div>
      </div>
      <div class="box box5">Overall Progress</div>
      <div class="box box6">Progress bar | calender</div>
    </div>
  );
};

export default Dashboard;
