import "./Tasks.css";

function Task(props) {
  return (
    <div className="task">
      <p>{props.name}</p>
      <input
        className="completedBtn"
        onChange={props.onChange}
        type="checkbox"
      />
    </div>
  );
}

export default Task;
