import React from "react";
import "./Archive.css";
import Sidebar from "../sidebar/Sidebar";
function Archive(props) {
	return (
		<>
			<Sidebar pageWrapId={"archive"} />
			<div id="archive" className="Archive">
				<h1>Archive</h1>
				<h2>(Under Construction)</h2>
			</div>
		</>
	);
}
export default Archive;
