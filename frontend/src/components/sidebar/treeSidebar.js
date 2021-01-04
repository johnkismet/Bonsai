import { bubble as Menu } from "react-burger-menu";
import React from "react";
import { Link, BrowserRouter } from "react-router-dom";
import TreeFarm from "../treeFarm/treeFarm";

// TODO: Figure out why text isn't completely aligned
function Sidebar(props) {
	return (
		<Menu {...props}>
			<h1 className="sideBarInfo" id="title">
				BONSAI
			</h1>
			<div className="userPicture"></div>
			<h1 className="sideBarInfo">John Anderson</h1>
			<h1 className="sideBarInfo">Streak: 10</h1>
			<Link to="/" className="sideBarInfo">
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

			{/* <Switch>
					<Route path="/">
						<TreeFarm />
					</Route>
				</Switch> */}
		</Menu>
	);
}

function Store() {
	return <h1>Store under construction</h1>;
}

export default Sidebar;
