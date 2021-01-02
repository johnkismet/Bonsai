import { useSelector, useDispatch } from "react-redux";
import React from "react";
import "./Tree.css";

function Tree(props) {
	return (
		<div className="tree">
			{/* <img
				src="../../assets/images/tempTreeSprite.png"
				alt="Bonsai Tree"
				className="bonsaiImg"
			/> */}
			<div className="bonsaiImg"></div>
			<h2 className="treeName">Tree name</h2>

			<button className="workBtn">Work</button>
		</div>
	);
}

function deleteTree(e) {
	console.log(e.target);
}

export default Tree;
