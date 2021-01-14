import React, { useState, useEffect } from "react";
import "./Statistics.css";
import Sidebar from "../sidebar/Sidebar";

function Statistics(props) {
	const [time, setTime] = useState(0);

	useEffect(() => {
		setTime(Date.now());
	}, []);

	function getTime() {
		let initialTime = time;
		let currentTime = Date.now();
		let timeElapsed = (currentTime - initialTime) / 1000;
		console.log(timeElapsed);
		console.log(convertTime(timeElapsed));
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

	return (
		<>
			<Sidebar pageWrapId={"statistics"} />
			<div id="statistics" className="Statistics">
				<h1>Statistics</h1>
				<button onClick={getTime}>
					Click me to find out how much time has passed since you loaded this
					page
				</button>
			</div>
		</>
	);
}
export default Statistics;
