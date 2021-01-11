import React from "react";
import { Switch } from "react-router-dom";
import ConnectedRoute from "./ConnectedRoutes";
import TreeFarm from "./treeFarm/treeFarm";
import NewTree from "./newTree/newTree";
import MissingPage from "./missingPage/MissingPage";
import Tree from "./tree/Tree";
import Store from "./Store/Store";
import Statistics from "./Statistics/Statistics";
import Archive from "./Archive/Archive";
import Welcome from "./WelcomePage/Welcome";
import Login from "./WelcomePage/Login";
import Register from "./WelcomePage/Register";
import Introduction from "./Introduction/Introduction";
import Sidebar from "./sidebar/Sidebar";
import "../App.css";

export default function Navigation() {
	return (
		<div id="App">
			{/* <Sidebar pageWrapId={"page-wrap"} outerContainerId={"App"} /> */}
			<Switch>
				<ConnectedRoute
					exact
					path="/"
					redirectIfAuthenticated
					component={Welcome}
				/>
				<ConnectedRoute
					exact
					path="/login"
					redirectIfAuthenticated
					component={Login}
				/>
				<ConnectedRoute
					exact
					path="/register"
					redirectIfAuthenticated
					component={Register}
				/>
				<ConnectedRoute exact path="/treefarm" component={TreeFarm} />
				<ConnectedRoute exact isProtected path="/newTree" component={NewTree} />
				<ConnectedRoute exact isProtected path="/trees/:id" component={Tree} />
				<ConnectedRoute exact isProtected path="/store" component={Store} />
				<ConnectedRoute
					exact
					isProtected
					path="/statistics"
					component={Statistics}
				/>
				<ConnectedRoute exact isProtected path="/archive" component={Archive} />

				<ConnectedRoute
					exact
					isProtected
					path="/introduction"
					component={Introduction}
				/>
				<ConnectedRoute path="*" component={MissingPage} />
			</Switch>
		</div>
	);
}
