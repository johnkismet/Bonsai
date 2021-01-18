import React, { Component } from "react";
import Chart from "chart.js";

export default class LineGraph extends Component {
	chartRef = React.createRef();

	componentDidMount() {
		const myChartRef = this.chartRef.current.getContext("2d");

		new Chart(myChartRef, {
			type: "line",
			data: {
				labels: ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"],
				datasets: [
					{
						label: "Hours worked",
						data: this.props.hoursWorked,
						backgroundColor: "rgb(77, 121, 81)",
					},
					{
						label: "Tasks completed",
						data: this.props.tasksDone,
						backgroundColor: "whitesmoke",
					},
				],
			},
			options: {
				// Customize options here, if needed
				hover: {
					// Overrides the global setting
					mode: "index",
				},
			},
		});
	}
	render() {
		return (
			<div className="graphContainer">
				<canvas id="myChart" ref={this.chartRef} />
			</div>
		);
	}
}
