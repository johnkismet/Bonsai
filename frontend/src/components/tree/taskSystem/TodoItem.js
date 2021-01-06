import React from "react";

function TodoItem(props) {
	return (
		<li className={props.completed ? "completed" : ""}>
			<div className="view">
				<input
					className="toggle"
					type="checkbox"
					checked={props.completed}
					onChange={() => props.handleToggle(props.id)}
				/>
				<label>{props.title}</label>
				<button
					className="btn destroy"
					onClick={() => props.handleDelete(props.id)}
				/>
			</div>
		</li>
	);
}

export default TodoItem;
