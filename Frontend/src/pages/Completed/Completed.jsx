import React from "react";
import "./Completed.css";

const Completed = () => {
  return (
    <div>
      <div className="cardss">
        <div className="heading">
          <h2>TASK 1</h2>
          <h3>INTRODUCTION</h3>
        </div>
        <div className="subtaskss">
          <label htmlFor="subtask1">
            <input type="checkbox" name="subtask1" id="" />
            subtask1
          </label>
          <label htmlFor="subtask1">
            <input type="checkbox" name="subtask1" id="" />
            subtask2
          </label>
          <label htmlFor="subtask1">
            <input type="checkbox" name="subtask1" id="" />
            subtask3
          </label>
          <label htmlFor="subtask1">
            <input type="checkbox" name="subtask1" id="" />
            subtask4
          </label>
        </div>
      </div>
    </div>
  );
};

export default Completed;
