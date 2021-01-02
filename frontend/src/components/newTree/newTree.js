// Advanced settings:
// Needs (how long user must work on tree)
// Wither Rate (How long until tree begins to wither) */
import { useSelector, useDispatch } from "react-redux";

function NewTree() {
	const dispatch = useDispatch();

	return (
		<div>
			<form
				action="http://localhost:4000/newTree"
				method="post"
				enctype="application/x-www-form-urlencoded"
			>
				<label htmlFor="name">Name of tree: </label>
				<input name="name" type="text" />

				<h2>Type of tree</h2>

				<input value="longTerm" name="typeOfTree" type="radio" />
				<label htmlFor="typeOfTree">Long term </label>
				<input value="shortTerm" name="typeOfTree" type="radio" />
				<label htmlFor="shortTerm">Short term </label>
				<br />
				<label htmlFor="details">Project details: </label>
				<input name="details" type="text" />
				<br />
				<input type="submit" />
			</form>
		</div>
	);
}

export default NewTree;
