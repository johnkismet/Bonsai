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

function convertTime(seconds) {
	if (seconds === 0) {
		return "now";
	}
	let total = seconds;
	let timeObj = {
		year: 0,
		day: 0,
		hour: 0,
		minute: 0,
		second: 0,
	};
	while (total - 31536000 >= 0) {
		total -= 31536000;
		timeObj.year++;
	}
	while (total - 86400 >= 0) {
		total -= 86400;
		timeObj.day++;
	}
	while (total - 3600 >= 0) {
		total -= 3600;
		timeObj.hour++;
	}
	while (total - 60 >= 0) {
		total -= 60;
		timeObj.minute++;
	}
	while (total - 1 >= 0) {
		total -= 1;
		timeObj.second++;
	}
	let formatStr = new String();
	let and = false;
	let count = 0;
	for (const key in timeObj) {
		if (timeObj[key] > 0) {
			count++;
		}
		if (count > 1) {
			and = true;
		}
	}
	for (const key in timeObj) {
		if (timeObj[key] > 0) {
			if (timeObj[key] > 1) {
				formatStr += timeObj[key] + " " + key + "s" + " ";
			} else {
				formatStr += timeObj[key] + " " + key + " ";
			}
		}
	}
	let formatArr = formatStr.trim().split(" ");
	if (and) {
		formatArr.splice(-2, 0, "and");
	}
	let keyCount = 0;
	for (const key in timeObj) {
		if (timeObj[key] > 0) {
			keyCount++;
		}
	}
	if (keyCount === 3) {
		formatArr[1] += ",";
	}
	if (keyCount === 4) {
		formatArr[1] += ",";
		formatArr[3] += ",";
	}
	if (keyCount === 5) {
		formatArr[1] += ",";
		formatArr[3] += ",";
		formatArr[5] += ",";
	}
	formatStr = formatArr.join(" ");
	return formatStr.trim();
}

function deleteTree() {
	console.log("Hi");
	axios.delete(`http://localhost:4000/trees/${id}`);

	setTimeout(() => {
		window.location = "/";
	}, 500);
}
export default Tree;
