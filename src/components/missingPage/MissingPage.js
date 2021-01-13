import React from "react";
import { Link } from "react-router-dom";
import "./MissingPage.css";
import Sidebar from "../sidebar/Sidebar";
function missingPage() {
	return (
		<>
			<Sidebar pageWrapId={"missingPage"} />
			<div id="missingPage" className="pageContainer">
				<div className="spacer"></div>
				<div className="MissingPage">
					<h1>404</h1>
					<h2>(Looks like you got lost in the forest!)</h2>
					<Link className="sendHomeBtn" to="/treefarm">
						Go to your tree farm
					</Link>
				</div>
			</div>
		</>
	);
}

export default missingPage;
