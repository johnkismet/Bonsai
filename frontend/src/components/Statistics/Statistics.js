import React from "react";
import "./Statistics.css";
import { Bar } from "react-chartjs-2";

function Statistics(props) {
	// var color = Chart.helpers.color;
	var barChartData = {
		labels: ["January", "February", "March", "April", "May", "June", "July"],
		datasets: [
			{
				label: "Dataset 1",
				backgroundColor: "green",
				borderColor: "red",
				borderWidth: 1,
				data: [1, 2, 3, 4, 5, 6],
			},
			{
				label: "Dataset 2",
				backgroundColor: "pink",
				borderColor: "green",
				borderWidth: 1,
				data: [10, 11, 12, 13, 14, 15, 16],
			},
		],
	};
	return (
		<div className="Statistics">
			<Bar
				data={barChartData}
				width={100}
				height={50}
				options={{ maintainAspectRatio: false }}
			/>
		</div>
	);
}
export default Statistics;
