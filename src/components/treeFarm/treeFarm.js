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
import useAuth from "../../hooks/useAuth";
import Tree from "./treeLink";
const url =
	process.env.NODE_ENV === "production"
		? "https://bonsai-one.vercel.app/api"
		: "http://localhost:3000/api";

const axios = require("axios").default;

function TreeFarm() {
	const treeCount = useSelector((state) => state.treeCount);
	const dispatch = useDispatch();
	const showTrees = treeCount.trees.map((tree, index) => (
		<Tree key={tree._id} name={tree.name} id={tree._id} treeFlavor={tree.treeFlavor} />
	));
	const auth = useAuth();
	useEffect(() => {
		auth
			.fetch("/api/trees")
			.then((res) => res.json())
			.then((data) => {
				data.map((tree) => {
					dispatch(addTree(tree));
				});
			});
	}, []);

	// useEffect(() => {
	// 	axios
	// 		.get(`${url}/trees/boo`)
	// 		// .get(`${url}/trees/${userId}`)
	// 		.then(function (res) {
	// 			// handle success
	// 			let data = res.data;
	// data.map((tree) => {
	// 	dispatch(addTree(tree));
	// });
	// 		})
	// 		.catch(function (error) {
	// 			// handle error
	// 			console.error(error);
	// 		})
	// 		.then(function () {
	// 			// always executed
	// 		});

	// 	// document.title = `Bonsai`;
	// }, []);

	return (
		<>
			<Sidebar pageWrapId={"TreeFarm"} outerContainerId={"root"} />
			<div id="TreeFarm" className="App">
				{/* <Sidebar pageWrapId={"page-wrap"} outerContainerId={"root"} /> */}

				<div className="treeFarmGrid">
					<Grid
						className="treeFarmGrid"
						container
						direction="row"
						justify="center"
						alignItems="center"
					>
						{showTrees}
					</Grid>
				</div>
				<Link to="/newTree" className="addTaskBtn"></Link>
			</div>
		</>
	);
}

export default TreeFarm;
