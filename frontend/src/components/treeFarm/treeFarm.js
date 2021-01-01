// import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
// import { Modal } from "@material-ui/core";
// import { Container } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "../../App.css";
import Sidebar from "../sidebar/Sidebar";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../../actions";
import Tree from "../tree/Tree";

const axios = require("axios").default;

function TreeFarm() {
	const treeCount = useSelector((state) => state.treeCount);
	const dispatch = useDispatch();

	useEffect(() => {
		axios
			.get("http://localhost:4000/trees")
			.then(function (res) {
				// handle success
				let data = res.data;
				data.map((tree) => {
					dispatch(increment());
				});
			})
			.catch(function (error) {
				// handle error
				console.error(error);
			})
			.then(function () {
				// always executed
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
							{renderTrees(treeCount)}
						</Grid>

						<Link to="/newTree" className="addTaskBtn"></Link>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
}

const renderTrees = (amountOfTrees) => {
	for (let i = 0; i < amountOfTrees; i++) {
		console.log("Tree added");
		return <Tree />;
	}
};

export default TreeFarm;
