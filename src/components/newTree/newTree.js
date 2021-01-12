// Advanced settings:
// Needs (how long user must work on tree)
// Wither Rate (How long until tree begins to wither) */
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import "./newTree.css";
import TreePic from "../../assets/images/tempTreeSprite.png";
import axios from "axios";
import Sidebar from "../sidebar/Sidebar";

const url =
	process.env.NODE_ENV === "production"
		? "https://bonsai-one.vercel.app/api"
		: "http://localhost:3000/api";

function NewTree() {
	const dispatch = useDispatch();
	const history = useHistory();

	return (
		<>
			<Sidebar pageWrapId={"newTree"} outerContainerId={"root"} />
			<div id="newTree" className="spacer"></div>
			<div className="newTree">
				<div className="treeContainer">
					<img src={TreePic} alt="Tree" srcset="" />
				</div>
				<form
					className="newTreeForm"
					action={`${url}/newTree`}
					method="post"
					encType="application/x-www-form-urlencoded"
				>
					<input
						className="treeInfoInput"
						id="nameInput"
						name="name"
						placeholder="Name"
						type="text"
					/>
					<input
						className="treeInfoInput"
						id="notesInput"
						placeholder="Notes"
						name="details"
						type="text"
					/>
					<input value="Create Tree" className="submitBtn" type="submit" />
				</form>
			</div>
		</>
	);
}

export default NewTree;
