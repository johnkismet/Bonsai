import "./Tasks.css";
import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
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

  const addTask = () => {
    let newTaskName = document.querySelector(".taskInput").value;
    console.log("adding task");
    let newTask = {
      name: newTaskName,
      parentId: id,
      completed: false,
    };
    let newTasks = [...tasks];
    newTasks.push(newTask);
    setTasks(newTasks);
  };

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
    return () => {
      //return function inside useEffect is equivalent to componentWillUnmount (https://dev.to/robmarshall/how-to-use-componentwillunmount-with-functional-components-in-react-2a5g)

      console.log("sending tasks");
      console.log(tasks);
      axios.post(`http://localhost:4000/setTasks/?${id}`, tasks);
    };
  }, []);
  return (
    <div className="Tasks">
      <div className="inputContainer">
        <input
          placeholder="What're you working on?"
          className="taskInput"
        ></input>
        <input
          className="submitTask"
          onClick={() => addTask()}
          type="button"
          value="Submit"
        />
      </div>
      <div className="taskContainer">
        <Grid container direction="column" justify="center" alignItems="center">
          {showTasks}
        </Grid>
      </div>
    </div>
  );
}

export default TaskContainer;
