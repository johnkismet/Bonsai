import "./Tasks.css";
import React, { useState, useEffect } from "react";
import Task from "./Task";
const axios = require("axios").default;

let tasksArray = [
  {
    name: "task one",
    parentId: "12312",
    completed: false,
  },
  {
    name: "task two",
    parentId: "123311",
    completed: false,
  },
  {
    name: "task three",
    parentId: "234342",
    completed: false,
  },
];

function TaskContainer(props) {
  let id = props.id;
  const [tasks, setTasks] = useState([]);

  const showTasks = tasks.map((task, index) => (
    <Task className="task" name={task.name} completed={task.completed} />
  ));

  useEffect(() => {
    axios
      .get(`http://localhost:4000/getTasks/${id}`)
      .then(function (res) {
        // handle success
        let data = res.data;
        setTasks(data);
      })
      .catch(function (error) {
        // handle error
        console.error(error);
      })
      .then(function () {
        // always executed
      });
  }, []);
  return (
    <div className="Tasks">
      <div className="inputContainer">
        <input
          placeholder="What're you working on?"
          className="taskInput"
        ></input>
        <input className="submitTask" type="submit" />
      </div>
      <div className="taskContainer">{showTasks}</div>
    </div>
  );
}

export default TaskContainer;
