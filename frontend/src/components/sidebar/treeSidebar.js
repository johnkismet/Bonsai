import { bubble as Menu } from "react-burger-menu";
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import TreeFarm from "../treeFarm/treeFarm";

// TODO: Figure out why text isn't completely aligned
function Sidebar(props) {
	return (
		<Router>
			<Menu {...props}>
				<h1 className="sideBarInfo" id="title">
					BONSAI
				</h1>
				<div className="userPicture"></div>
				<h1 className="sideBarInfo">John Anderson</h1>
				<h1 className="sideBarInfo">Streak: 10</h1>
				<Link className="sideBarInfo" to="/">
					Home
				</Link>
				<Link className="sideBarInfo" to="/store">
					Customize Tree
				</Link>
				<Link className="sideBarInfo" to="/archive">
					Archive
				</Link>
				<Link className="sideBarInfo" to="/statistics">
					Statistics
				</Link>

				{/* <Switch>
					<Route path="/">
						<TreeFarm />
					</Route>
				</Switch> */}
			</Menu>
		</Router>
	);
}

export default Sidebar;
