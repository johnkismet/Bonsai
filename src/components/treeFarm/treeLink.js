import { useSelector, useDispatch } from "react-redux";
import React from "react";
import treePic from "../../assets/images/tempTreeSprite.png";
import treePic2 from "../../assets/images/tempTreeSprite2.png";
import treePic3 from "../../assets/images/tempTreeSprite3.png";
import happyFace from "../../assets/images/happyFace.png";
import sadFace from "../../assets/images/sadFace.png";
import deadFace from "../../assets/images/deadFace.png";
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
	let status = new Image();
	let timeElapsed = (Date.now() - props.dateLastWorked) / 1000;
	let twoDays = 172800;
	let oneDay = 86400;
	if (timeElapsed >= twoDays) {
		status = deadFace;
	} else if (timeElapsed >= oneDay) {
		status = sadFace;
	} else {
		status = happyFace;
	}

	return (
		<div id={props.id} className="tree">
			<div className="bonsaiImg">
				<img src={treeFlavor} alt="tree" width="100px" />
				<img src={status} alt="Happy face" width="20px" />
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
