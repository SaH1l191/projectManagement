import React, { useState } from "react";
import "./Task.css";
import { Checkbox } from "primereact/checkbox";

const Task = () => {
  const [checked, setChecked] = useState(false);
  return (
    <>
      <div className="cardContainer">
        <div className="cards">
          <div className="heading">
            <h2>TASK 1</h2>
            <h3>INTRODUCTION</h3>
          </div>
          <div className="subtasks">
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
          <div className="submit"></div>
        </div>
      </div>
    </>
  );
};

export default Task;
