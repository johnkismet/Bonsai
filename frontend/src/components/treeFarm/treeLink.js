import { useSelector, useDispatch } from "react-redux";
import React from "react";
import treePic from "../../assets/images/tempTreeSprite.png";
import "./Tree.css";

const axios = require("axios").default;

function Tree(props) {
	return (
		<div id={props.id} className="tree">
			<div className="bonsaiImg">
				<img src={treePic} width="100px" />
			</div>
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
