import { fallDown as Menu } from "react-burger-menu";
import React from "react";
import { Link, BrowserRouter } from "react-router-dom";
import TreeFarm from "../treeFarm/treeFarm";
import useAuth from "../../hooks/useAuth";
import "../../App.css";

// TODO: Figure out why text isn't completely aligned
function Sidebar(props) {
	const auth = useAuth();

	return (
		<Menu {...props}>
			<h1 className="sideBarInfo" id="title">
				BONSAI
			</h1>
			<div className="userPicture"></div>
			<h1 className="sideBarInfo">User Name</h1>
			<Link to="/treefarm" className="sideBarInfo">
				Home
			</Link>
			<Link to="/store" className="sideBarInfo">
				Store
			</Link>
			<Link to="/archive" className="sideBarInfo">
				Archive
			</Link>
			<Link to="/statistics" className="sideBarInfo">
				Statistics
			</Link>
			<div
				onClick={() => {
					auth.logout();
					// console.log("Log");
				}}
				id="logoutBtn"
			>
				<h2>Log out</h2>
			</div>
		</Menu>
	);
}

export default Sidebar;
