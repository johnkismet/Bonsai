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
						data: [2, 4, 6, 2, 3, 5, 5],
					},
					{
						label: "Tasks completed",
						data: [2, 1, 1, 4, 2, 1, 2],
					},
				],
			},
			options: {
				// Customize options here, if needed
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
