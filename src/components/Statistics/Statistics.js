import React, { useState, useEffect } from "react";
import "./Statistics.css";
import Sidebar from "../sidebar/Sidebar";
import LineGraph from "./lineGraph";
import useAuth from "../../hooks/useAuth";
import CircularProgress from "@material-ui/core/CircularProgress";

const url =
	process.env.NODE_ENV === "production"
		? "https://bonsai-one.vercel.app/api"
		: "http://localhost:3000/api";

export default function Statistics(props) {
	const auth = useAuth();
	const [time, setTime] = useState(0);
	const [hours, setHours] = useState([]);
	const [tasks, setTasks] = useState([]);
	const [isLoaded, setIsLoaded] = useState(false);

	// get request to get hoursWorked array. Pass that in as props to LineGraph
	useEffect(() => {
		auth
			.fetch(`${url}/getStats`)
			.then((res) => res.json())
			.then((data) => {
				// console.log(data);
				let hours = [];
				let tasksArr = [];
				data.hoursWorked.map((time) => {
					let timeInHours = Math.round(time / 3600);
					hours.push(timeInHours);
				});
				data.tasksDone.map((task) => {
					tasksArr.push(task);
				});
				setHours(hours);
				setTasks(tasksArr);
				setIsLoaded(true);
				console.log(hours);
				console.log(tasksArr);
			});
	}, []);

	if (isLoaded) {
		return (
			<>
				<Sidebar pageWrapId={"statistics"} />
				<div id="statistics" className="Statistics">
					<h1>Your analytics</h1>
					<LineGraph tasksDone={tasks} hoursWorked={hours} />
				</div>
			</>
		);
	}
	return (
		<>
			<div className="spacer"></div>
			<div className="loading">
				<CircularProgress size={100} />
			</div>
		</>
	);
}
