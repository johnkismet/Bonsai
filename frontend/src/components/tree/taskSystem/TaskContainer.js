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
  const [itemsCompleted, setItemsCompleted] = useState(0);

  const ToggleCompleted = () => {
    console.log("test");
    let NewTasks = [...tasks];
    //NewTasks[index].completed = !NewTasks[index].completed;
  };
  const showTasks = tasks.map((task, index) => (
    <Task
      className="task"
      onChange={ToggleCompleted}
      name={task.name}
      completed={task.completed}
    />
  ));
  const addTask = () => {
    let newTaskName = document.querySelector(".taskInput").value;
    document.querySelector(".taskInput").value = "";
    console.log("adding task");
    let newTask = {
      name: newTaskName,
      parentId: id,
      completed: false,
    };
    let newTasks = [...tasks];
    newTasks.push(newTask);
    setTasks(newTasks);
    console.log(tasks);
  };

  useEffect(() => {
    GetTasks();
  }, []);

  useEffect(() => {
    let tasksToSend = tasks;

    return () => {
      CompWillUnmount(tasksToSend);
    };
  }, [tasks]);
  async function GetTasks() {
    await axios
      .get(`http://localhost:4000/getTasks/${id}?`)
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
  }
  async function CompWillUnmount(tasks) {
    //return function inside useEffect is equivalent to componentWillUnmount (https://dev.to/robmarshall/how-to-use-componentwillunmount-with-functional-components-in-react-2a5g)
    let packageToSend = {
      tasks: tasks,
      itemsCompleted: itemsCompleted,
    };

    console.log(packageToSend);
    await axios
      .post(`http://localhost:4000/setTasks/${id}`, packageToSend)
      .then(function (res) {
        console.log(res);
      });
  }
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
        <button onClick={CompWillUnmount}>Send Data</button>
      </div>
    </div>
  );
}

export default TaskContainer;
