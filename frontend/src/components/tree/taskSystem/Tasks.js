import "./Tasks.css";
import { useEffect } from "react";
const axios = require("axios").default;
function Tasks(props) {
  let id = props.id;
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
      <div className="taskContainer">
        {/* <div className="task">Task one</div>
        <div className="task">Task one</div>
        <div className="task">Task one</div> */}
      </div>
    </div>
  );
}

export default Tasks;
