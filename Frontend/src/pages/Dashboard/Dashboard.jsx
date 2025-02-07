import React from "react";
import "./Dashboard.css";
import ChartOne from "../../components/Charts/ChartOne";
import ChartTwo from "../../components/Charts/ChartTwo";
import ChartThree from "../../components/Charts/ChartThree";
import BarChart from "../../components/Charts/BarChart";
import CalendarAutoLocaleExample from "../../components/Charts/Calender";
import Calender from "../../components/Charts/Calender";

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
          <h1>0</h1>
        </div>
        <div className="pie-chart">
          <ChartOne />
        </div>
      </div>
      <div class="box box3">
        <div className="text-container">
          <h3>SUBMITTED TASK</h3>
          <h1>0</h1>
        </div>
        <div className="pie-chart">
          <ChartTwo />
        </div>
      </div>
      <div class="box box4">
        <div className="text-container">
          <h3>PENDING TASK</h3>
          <h1>4</h1>
        </div>
        <div className="pie-chart">
          <ChartThree />
        </div>
      </div>
      <div class="box box5">
        <BarChart />
      </div>
      <div class="box box6">
        <Calender />
      </div>
    </div>
  );
};

export default Dashboard;
