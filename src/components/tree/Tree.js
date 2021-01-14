import React, { useState, useEffect } from "react";
import Sidebar from "../sidebar/Sidebar";
import "./Tree.css";
import TimeMe from "timeme.js";
import TaskContainerClass from "./taskSystem/TaskContainerClass";
import treePic from "../../assets/images/tempTreeSprite.png";
import treePic2 from "../../assets/images/tempTreeSprite2.png";
import treePic3 from "../../assets/images/tempTreeSprite3.png";
import useAuth from "../../hooks/useAuth";

const axios = require("axios").default;
const id = window.location.pathname.substring(7);
const url =
	process.env.NODE_ENV === "production"
		? "https://bonsai-one.vercel.app/api"
		: "http://localhost:3000/api";

function Tree(props) {
	const auth = useAuth();
	const [name, setName] = useState("");
	const [details, setDetails] = useState("");
	const [type, setType] = useState("");
	const [stage, setStage] = useState(0);
	const [tasks, setTasks] = useState([]);
	const [points, setPoints] = useState(0);
	const [workTimer, setWorkTimer] = useState(0);
	const [treeFlavor, setTreeFlavor] = useState(0);
	const [open, setOpen] = useState(false);
	const [time, setTime] = useState(0);

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	useEffect(() => {
		auth
			.fetch(`${url}/tree/${id}`)
			.then((res) => res.json())
			.then((data) => {
				setName(data.name);
				setDetails(data.details);
				setType(data.type);
				setStage(data.stage);
				setTasks(data.tasks);
				setPoints(data.points);
				setWorkTimer(data.workTimer);
				setTreeFlavor(data.treeFlavor);
			});

		setTime(Date.now());
		return () => {
			let initialTime = time;
			let currentTime = Date.now();
			let timeElapsed = (currentTime - initialTime) / 1000;
			const token = auth.magic.user.getIdToken();

			const headers = {
				"Content-Type": "application/json",
				Authorization: `Bearer ${token}`,
			};
			const payload = {
				workTime: timeElapsed,
			};
			axios
				.post(`${url}/setTime/${id}`, payload, {
					headers: headers,
				})
				.then((response) => {
					console.log(response);
				});
		};
	}, []);
	document.title = `Working on ${name}`;

	let treeFlavorImg = new Image();
	if (treeFlavor === 0) {
		treeFlavorImg = treePic;
	} else if (treeFlavor === 1) {
		treeFlavorImg = treePic2;
	} else {
		treeFlavorImg = treePic3;
	}

	function getTreePic(stage) {
		if (stage === 0) {
			return <img src={treeFlavorImg} width="100px" />;
		} else if (stage === 1) {
			return <img src={treeFlavorImg} width="200px" />;
		} else {
			return <img src={treeFlavorImg} width="300px" />;
		}
	}

	return (
		<>
			<Sidebar pageWrapId={"tree"} outerContainerId={"root"} />
			<div className="Spacer"></div>
			<div id="tree" className="Tree">
				<div className="leftSide">
					<div className="treeNameCont">
						<div className="treeName">
							<h3>{name}</h3>
						</div>
					</div>
					<div className="detailsCont">
						<div className="details">
							<p>{details}</p>
						</div>
					</div>
					<div className="treePic">
						{getTreePic(stage)}
						{convertTime(workTimer)}
					</div>
					<div className="buttonsContainer"></div>
				</div>
				<div className="rightSide">
					<div className="taskCont">
						<TaskContainerClass id={id} />
					</div>
				</div>
			</div>
		</>
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
	// console.log(id);
	axios.delete(`${url}/trees/${id}`).then((res) => console.log(res));

	// setTimeout(() => {
	// 	window.location = "/treefarm";
	// }, 500);
}
export default Tree;
