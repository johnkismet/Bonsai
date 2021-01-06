import React, { useState, useEffect } from "react";
import Sidebar from "../sidebar/treeSidebar";
import "./Tree.css";
import NewTask from "../NewTask/NewTask";

const axios = require("axios").default;
const id = window.location.pathname.substring(7);

function Tree(props) {
  const [treeInfo, setTreeInfo] = useState([]);
  const [todos, setTodos] = React.useState([
    { text: "Learn about React" },
    { text: "Meet friend for lunch" },
    { text: "Build really cool todo app" },
  ]);

  useEffect(() => {
    // TODO: USE REDUX STATE FOR INDIVIDUAL TREE INSTEAD OF ANOTHER FETCH REQUEST
    axios
      .get(`http://localhost:4000/trees/${id}`)
      .then(function (res) {
        // handle success
        setTreeInfo(res.data);
        // console.log(treeInfo);
      })
      .catch(function (error) {
        // handle error
        console.error(error);
      })
      .then(function () {
        // always executed
      });
  }, []);

  //   const addTodo = (text) => {
  //     const newTodos = [...todos, { text }];
  //     setTodos(newTodos);
  //  };
  return (
    <React.Fragment>
      {/* <Sidebar pageWrapId={"page-wrap"} outerContainerId={"App"} /> */}
      <div className="treeContainer">
        <h1>{treeInfo.name}</h1>
        <div className="treeInfoCont">
          <div className="treeNotes">{treeInfo.details}</div>
          <div className="treePic">Tree pic</div>
        </div>
        <div className="treeTaskContainer">
          <div className="task">
            <p>Task One</p>
            <button className="taskCheckBtn"></button>
          </div>
          <div className="task">
            <p>Task Two</p>
            <button className="taskCheckBtn"></button>
          </div>
          <div className="task">
            <p>Task Three</p>
            <button className="taskCheckBtn"></button>
          </div>
        </div>
        <div className="buttons">
          <NewTask addTodo={addTodo} />
          <button onClick={deleteTree}>Delete Tree</button>
        </div>
      </div>
    </React.Fragment>
  );
}
function deleteTree() {
  console.log("Hi");
  axios.delete(`http://localhost:4000/trees/${id}`);

  setTimeout(() => {
    window.location = "/";
  }, 500);
}
export default Tree;
