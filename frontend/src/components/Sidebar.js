import { slide as Menu } from "react-burger-menu";

function Sidebar(props) {
	return (
		<Menu {...props}>
			<div className="userPicture"></div>
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
