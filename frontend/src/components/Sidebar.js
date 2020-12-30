import { bubble as Menu } from "react-burger-menu";

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
			<a className="sideBarInfo" href="/">
				Home
			</a>
			<a className="sideBarInfo" href="/">
				Customize Tree
			</a>
			<a className="sideBarInfo" href="/">
				Settings
			</a>
		</Menu>
	);
}

export default Sidebar;
