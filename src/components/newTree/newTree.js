// Advanced settings:
// Needs (how long user must work on tree)
// Wither Rate (How long until tree begins to wither) */
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import "./newTree.css";
const url =
	process.env.NODE_ENV === "production"
		? "https://bonsai-one.vercel.app"
		: "http://localhost:3000/api";

function NewTree() {
	const dispatch = useDispatch();
	const history = useHistory();

	return (
		<div className="newTree">
			<form
				action={`${url}/api/newTree`}
				method="post"
				enctype="application/x-www-form-urlencoded"
			>
				<label htmlFor="name">Name of tree: </label>
				<input name="name" type="text" />
				<br />
				<br />

				<h2>Type of tree</h2>

				<input value="longTerm" name="typeOfTree" type="radio" />
				<label htmlFor="typeOfTree">Long term </label>
				<input value="shortTerm" name="typeOfTree" type="radio" />
				<label htmlFor="shortTerm">Short term </label>
				<br />
				<br />
				<label htmlFor="details">Project details: </label>
				<input name="details" type="text" />
				<br />
				<input
					// onClick={() => {
					// 	history.goBack();
					// }}
					type="submit"
				/>
			</form>
		</div>
	);
}

export default NewTree;
