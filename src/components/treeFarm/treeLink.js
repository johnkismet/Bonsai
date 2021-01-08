import { useSelector, useDispatch } from "react-redux";
import React from "react";
import treePic from "../../assets/images/tempTreeSprite.png";
import "./Tree.css";

function Tree(props) {
	return (
		<div id={props.id} className="tree">
			<div className="bonsaiImg">
				<img src={treePic} alt="tree" width="100px" />
			</div>
			<div className="treeNameTag">
				<h2 className="treeName">{props.name}</h2>
			</div>

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
