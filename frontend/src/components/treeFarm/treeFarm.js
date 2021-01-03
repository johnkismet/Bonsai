// import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
// import { Modal } from "@material-ui/core";
// import { Container } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "../../App.css";
import Sidebar from "../sidebar/Sidebar";
import { useSelector, useDispatch } from "react-redux";
import { addTree } from "../../actions";
import Tree from "./treeLink";

const axios = require("axios").default;

function TreeFarm() {
	const treeCount = useSelector((state) => state.treeCount);
	const dispatch = useDispatch();
	const showTrees = treeCount.trees.map((tree, index) => (
		<Tree name={tree.name} id={tree._id} />
	));

	useEffect(() => {
		axios
			.get("http://localhost:4000/trees")
			.then(function (res) {
				// handle success
				let data = res.data;
				data.map((tree) => {
					dispatch(addTree(tree));
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
							{showTrees}
						</Grid>

						<Link to="/newTree" className="addTaskBtn"></Link>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
}

export default TreeFarm;