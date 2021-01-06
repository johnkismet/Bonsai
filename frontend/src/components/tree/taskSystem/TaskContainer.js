import "./Tasks.css";
import { useEffect } from "react";
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

  const showTasks = tasksArray.map((task, index) => (
    <Task className="task" name={task.name} completed={task.completed} />
  ));

  useEffect(() => {
    axios
      .get(`http://localhost:4000/getTasks`, {
        params: {
          parentId: id,
        },
      })
      .then(function (res) {
        // handle success
        let data = res.data;
        console.log(data);
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
