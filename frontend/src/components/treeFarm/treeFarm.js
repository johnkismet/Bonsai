// import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
// import { Modal } from "@material-ui/core";
// import { Container } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "../../App.css";
import Sidebar from "../sidebar/Sidebar";
const axios = require("axios").default;

function TreeFarm() {
	const [trees, setTrees] = useState([]);

	// for (const [index, value] of treeArray.entries()) {
	// 	items.push(<li key={index}>{value}</li>)
	//   }
	useEffect(() => {
		axios
			.get("http://localhost:4000/trees")
			.then(function (res) {
				// handle success
				let data = res.data;
				// console.log(data.length);
				data.map((tree) => {
					setTrees(...trees, tree);
				});
				// console.log("s");
			})
			.catch(function (error) {
				// handle error
				console.error(error);
			})
			.then(function () {
				// always executed
				console.log(trees);
			});
	}, []);

	return (
		<React.Fragment>
			<Sidebar pageWrapId={"page-wrap"} outerContainerId={"App"} />

			<div className="App">
				<div id="page-wrap">
					<div id="treeFarm">
						<Grid
							container
							direction="row"
							justify="center"
							alignItems="center"
						>
							{/* {trees} */}
						</Grid>

						<Link to="/newTree" className="addTaskBtn"></Link>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
}

export default TreeFarm;
