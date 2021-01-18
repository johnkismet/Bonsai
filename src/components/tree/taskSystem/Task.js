import "./Tasks.css";
import React from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

function Task(props) {
	return (
		<div className="task">
			{/* <div className="textSpacer"></div> */}
			<p>{props.name}</p>
			<div className="actions">
				<FontAwesomeIcon
					icon={faTrash}
					onClick={() => props.Delete(props.taskId)}
				>
					Delete
				</FontAwesomeIcon>
				<input
					className="completedBtn"
					onChange={() => props.onChange(props.taskId)}
					type="checkbox"
					checked={props.completed}
				/>
			</div>

			{/* <div className="textSpacer"></div> */}
		</div>
	);
}

export default Task;
