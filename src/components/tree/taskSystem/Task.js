import "./Tasks.css";
import React from "react";
import { useState } from "react";

function Task(props) {
	return (
		<div className="task">
			{/* <div className="textSpacer"></div> */}
			<p>{props.name}</p>
			<input
				className="completedBtn"
				onChange={() => props.onChange(props.taskId)}
				type="checkbox"
				checked={props.completed}
			/>
			{/* <div className="textSpacer"></div> */}
		</div>
	);
}

export default Task;
