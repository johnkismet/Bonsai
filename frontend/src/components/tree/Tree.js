import React, { useState, useEffect } from "react";
import Sidebar from "../sidebar/treeSidebar";
import "./Tree.css";
import TimeMe from "timeme.js";

const axios = require("axios").default;
const id = window.location.pathname.substring(7);

function Tree(props) {
	const [name, setName] = useState("");
	const [details, setDetails] = useState("");
	const [type, setType] = useState("");
	const [tasks, setTasks] = useState([]);
	const [points, setPoints] = useState(0);
	const [workTimer, setWorkTimer] = useState(0);

	useEffect(() => {
		// TODO: USE REDUX STATE FOR INDIVIDUAL TREE INSTEAD OF ANOTHER FETCH REQUEST

		axios
			.get(`http://localhost:4000/trees/${id}`)
			.then(function (res) {
				// handle success
				setName(res.data.name);
				setDetails(res.data.details);
				setType(res.data.type);
				setTasks(res.data.tasks);
				setPoints(res.data.points);
				setWorkTimer(res.data.workTimer);
			})
			.catch(function (error) {
				// handle error
				console.error(error);
			})
			.then(function () {
				// always executed
				// Initialize library and start tracking time
				TimeMe.initialize({
					currentPageName: "my-home-page", // current page
					idleTimeoutInSeconds: 1000000, // seconds
				});
			});

		return () => {
			document.title = `Bonsai`;

			let timeSpentOnPage = TimeMe.getTimeOnCurrentPageInSeconds();
			axios({
				method: "post",
				url: `http://localhost:4000/trees/${id}`,
				data: {
					workTimer: timeSpentOnPage,
				},
			});
		};
	}, []);
	document.title = `Working on ${name}`;

	return (
		<React.Fragment>
			{/* <Sidebar pageWrapId={"page-wrap"} outerContainerId={"App"} /> */}
			<div className="treeContainer">
				<h1>{name}</h1>
				<div className="treeInfoCont">
					<div className="treeNotes">{details}</div>
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
				<button onClick={deleteTree}>Delete Tree</button>
				<h1>You've worked on this tree for {convertTime(workTimer)}!</h1>
			</div>
		</React.Fragment>
	);
}

function convertTime(workTimer) {
	let timeInMinutes = Math.floor(workTimer / 60);
	let timeInHours = Math.floor(workTimer / 3600);

	if (workTimer < 60) {
		return `${workTimer} seconds`;
	} else if (workTimer < 3600) {
		if (workTimer < 120) return `${timeInMinutes} minute`;
		return `${timeInMinutes} minutes`;
	} else {
		return `${timeInHours} hours`;
	}
}

function deleteTree() {
	console.log("Hi");
	axios.delete(`http://localhost:4000/trees/${id}`);

	setTimeout(() => {
		window.location = "/";
	}, 500);
}
export default Tree;
