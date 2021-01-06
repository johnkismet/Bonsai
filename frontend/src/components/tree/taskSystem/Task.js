function Task(props) {
  return (
    <div className="task">
      <p>{props.name}</p>
      <input type="checkbox" />
    </div>
  );
}

export default Task;
