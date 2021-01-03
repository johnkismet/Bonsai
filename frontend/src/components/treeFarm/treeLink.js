import { useSelector, useDispatch } from "react-redux";
import React from "react";
import "./Tree.css";

const axios = require("axios").default;

function Tree(props) {
	return (
		<div id={props.id} className="tree">
			{/* <img
				src="../../assets/images/tempTreeSprite.png"
				alt="Bonsai Tree"
				className="bonsaiImg"
			/> */}
			<div className="bonsaiImg"></div>
			<h2 className="treeName">{props.name}</h2>

			<button onClick={findTree} className="workBtn">
				Work
			</button>
		</div>
	);
}

function findTree(e) {
	let treeId = e.currentTarget.parentNode.id;
	window.location = `trees/${treeId}`;
}

export default Tree;
