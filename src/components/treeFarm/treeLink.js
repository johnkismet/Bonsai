import { useSelector, useDispatch } from "react-redux";
import React from "react";
import treePic from "../../assets/images/tempTreeSprite.png";
import treePic2 from "../../assets/images/tempTreeSprite2.png";
import treePic3 from "../../assets/images/tempTreeSprite3.png";
import "./Tree.css";

function Tree(props) {
	let treeFlavor = new Image();
	if (props.treeFlavor === 0) {
		treeFlavor = treePic;
	} else if (props.treeFlavor === 1) {
		treeFlavor = treePic2;
	} else {
		treeFlavor = treePic3;
	}
	return (
		<div id={props.id} className="tree">
			<div className="bonsaiImg">
				<img src={treeFlavor} alt="tree" width="100px" />
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
