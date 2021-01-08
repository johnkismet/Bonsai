import "./Tasks.css";
import React from "react";
import { useState } from "react";

function Task(props) {
  return (
    <div className="task">
      <p>{props.name}</p>
      <input
        className="completedBtn"
        onChange={() => props.onChange(props.taskId)}
        type="checkbox"
      />
    </div>
  );
}

export default Task;
