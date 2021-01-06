import "./Tasks.css";

function Task(props) {
	return (
		<div className="task">
			<p>{props.name}</p>
			<input className="completedBtn" type="checkbox" />
		</div>
	);
}

export default Task;
