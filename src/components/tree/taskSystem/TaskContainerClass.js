import axios from "axios";
import { Component } from "react";
import { Grid } from "@material-ui/core";
import useMagicLink from "use-magic-link";
import Task from "./Task";
import useAuth from "../../../hooks/useAuth";
import "./Tasks.css";
import { v4 as uuid } from "uuid";
import React, { useState, useEffect } from "react";
const url =
	process.env.NODE_ENV === "production"
		? "https://bonsai-one.vercel.app/api"
		: "http://localhost:3000/api";

export default function TaskContainer(props) {
	const [tasks, setTasks] = useState([]);
	const [currentName, setCurrentName] = useState("");
	const id = props.id;

	// let fakeTasks = []

	const auth = useAuth();
	useEffect(() => {
		console.log("useEffect");

		auth
			.fetch(`${url}/getTasks/${id}`)
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				setTasks(data);
			});
	}, []);

	const enterAddTask = (event) => {
		let KeyPressed = event.nativeEvent.code;
		if (KeyPressed === "Enter") {
			addTask();
		}
	};

	const addTask = async () => {
		console.log("addTask");
		if (currentName !== "") {
			let newTaskName = currentName;
			setCurrentName("");
			let newId = uuid();
			let newTask = {
				name: newTaskName,
				parentId: id,
				taskId: newId,
				completed: false,
			};

			let newTasks = [...tasks, newTask];
			setTasks(newTasks);
			const token = await auth.magic.user.getIdToken();
			const headers = {
				"Content-Type": "application/json",
				Authorization: `Bearer ${token}`,
			};
			const AGH = {
				tasks: [...tasks, newTask],
				itemsCompleted: 0,
			};
			axios.post(`${url}/setTasks/${id}`, AGH, {
				headers: headers,
			});
		}
	};

	const ToggleCompleted = async (changedId) => {
		//literally stole 90% of this from the todo app
		let addPoints = -1;
		const newTasks = [...tasks];
		for (let i = 0; i < newTasks.length; i++) {
			if (newTasks[i].taskId === changedId) {
				if (newTasks[i].completed === false) {
					addPoints = 1;
					newTasks[i].completed = true;
				} else {
					newTasks[i].completed = false;
				}
			}
		}
		setTasks(newTasks);
		const token = await auth.magic.user.getIdToken();
		const headers = {
			"Content-Type": "application/json",
			Authorization: `Bearer ${token}`,
		};
		const newReq = {
			tasks: [...tasks],
			itemsCompleted: addPoints,
		};
		axios
			.post(`${url}/setTasks/${id}`, newReq, {
				headers: headers,
			})
			.then((response) => {
				console.log(response);
			});
		//newTasks[taskId].completed = !newTasks[taskId].completed;
	};
	const sendTasksToBack = async (NewTasks) => {
		const token = await auth.magic.user.getIdToken();
		const headers = {
			"Content-Type": "application/json",
			Authorization: `Bearer ${token}`,
		};
		const AGH = {
			tasks: NewTasks,
			itemsCompleted: 0,
		};
		axios
			.post(`${url}/setTasks/${id}`, AGH, {
				headers: headers,
			})
			.then((response) => {
				console.log(response);
			});
	};

	const DeleteTask = async (changedId) => {
		const newTasks = [...tasks];
		console.log(newTasks);
		for (let i = 0; i < newTasks.length; i++) {
			if (newTasks[i].taskId === changedId) {
				newTasks.splice(i, 1);
			}
			console.log(newTasks);
			setTasks(newTasks);
			sendTasksToBack(newTasks);
		}
	};

	const handleChange = (event) => {
		setCurrentName(event.target.value);
	};

	// 	let newTasks = [...tasks, newTask];
	// 	setTasks(newTasks);
	// 	const token = auth.magic.user.getIdToken();
	// 	const headers = {
	// 		"Content-Type": "application/json",
	// 		Authorization: `Bearer ${token}`,
	// 	};
	// 	const AGH = {
	// 		tasks: [ ...tasks, newTask],
	// 		itemsCompleted: 0,
	// 	};
	// 	axios
	// 		.post(`${url}/setTasks/${id}`, AGH, {
	// 			headers: headers,
	// 		})
	// }

	// 	const ToggleCompleted = async (changedId) => {
	// 		//literally stole 90% of this from the todo app
	// 		let addPoints = -1;
	// 		const newTasks = [...tasks];
	// 		for (let i = 0; i < newTasks.length; i++) {
	// 			if (newTasks[i].taskId === changedId) {
	// 				if (newTasks[i].completed === false) {
	// 					addPoints = 1;
	// 					newTasks[i].completed = true;
	// 				} else {
	// 					newTasks[i].completed = false;
	// 				}
	// 			}
	// 		}
	// 		setTasks(newTasks);
	// 		const token = await auth.magic.user.getIdToken();
	// 		const headers = {
	// 			"Content-Type": "application/json",
	// 			Authorization: `Bearer ${token}`,
	// 		};
	// 		const newReq = {
	// 			tasks: [ ...tasks ],
	// 			itemsCompleted: addPoints,
	// 		};
	// 		axios.post(`${url}/setTasks/${id}`, newReq, {
	// 			headers: headers
	// 		}).then((response) => {
	// 			console.log(response);
	// 		});
	// 		//newTasks[taskId].completed = !newTasks[taskId].completed;
	// 	};

	const showTasks = tasks.map((task, index) => (
		<Task
			className="task"
			name={task.name}
			Delete={DeleteTask}
			onChange={ToggleCompleted}
			completed={task.completed}
			taskId={task.taskId}
			key={index}
		/>
	));

	return (
		<div className="Tasks">
			<div className="inputContainer">
				<input
					placeholder="What're you working on?"
					className="taskInput"
					onKeyDown={(event) => enterAddTask(event)}
					value={currentName}
					onChange={handleChange}
				></input>
				<input
					className="submitTask"
					onClick={addTask}
					type="button"
					value="Add"
				/>
			</div>
			<div className="taskContainer">
				<Grid container direction="row" justify="center" alignItems="center">
					{showTasks}
				</Grid>
			</div>
		</div>
	);
}
