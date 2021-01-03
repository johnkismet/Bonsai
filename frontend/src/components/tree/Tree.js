import React, { useState, useEffect } from "react";
import Sidebar from "../sidebar/Sidebar";
import "./Tree.css";

const axios = require("axios").default;
const id = window.location.pathname.substring(7);

function Tree(props) {
	const [treeInfo, setTreeInfo] = useState([]);

	useEffect(() => {
		// TODO: USE REDUX STATE FOR INDIVIDUAL TREE INSTEAD OF ANOTHER FETCH REQUEST
		axios
			.get(`http://localhost:4000/trees/${id}`)
			.then(function (res) {
				// handle success
				setTreeInfo(res.data);
				// console.log(treeInfo);
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
			<div className="treeInfoContainer">
				<h1 className="treeInfo">Tree Name: {treeInfo.name}</h1>
				<h1 className="treeInfo">Tree details: {treeInfo.details}</h1>
				<button onClick={deleteTree}>Delete Tree</button>
			</div>
		</React.Fragment>
	);
}

function deleteTree() {
	console.log("Hi");
	axios.delete(`http://localhost:4000/trees/${id}`);

	setTimeout(() => {
		window.location = "/";
	}, 1000);
}
export default Tree;
