import React, { useState, useEffect } from "react";
import Sidebar from "../sidebar/Sidebar";

const axios = require("axios").default;

function Tree(props) {
	const [treeInfo, setTreeInfo] = useState([]);

	let id = window.location.pathname.substring(7);

	useEffect(() => {
		axios
			.get(`http://localhost:4000/trees/${id}`)
			.then(function (res) {
				// handle success
				setTreeInfo(res.data);
				console.log(treeInfo);
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

			<h1>Tree Name: {treeInfo.name}</h1>
			<h1>Tree details: {treeInfo.details}</h1>
		</React.Fragment>
	);
}
export default Tree;
