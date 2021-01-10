import React from "react";
import { Switch } from "react-router-dom";
import ConnectedRoute from "./ConnectedRoute";
import TreeFarm from "./components/treeFarm/treeFarm";
import NewTree from "./components/newTree/newTree";
import MissingPage from "./components/missingPage/MissingPage";
import Tree from "./components/tree/Tree";
import Store from "./components/Store/Store";
import Statistics from "./components/Statistics/Statistics";
import Archive from "./components/Archive/Archive";
import Welcome from "./components/WelcomePage/Welcome";
import Login from "./components/WelcomePage/Login";
import Register from "./components/WelcomePage/Register";
import Introduction from "./components/Introduction/Introduction";

export default function Navigation() {
	return (
		<Switch>
			<ConnectedRoute
				exact
				path="/"
				redirectIfAuthenticated
				component={Welcome}
			/>
			<ConnectedRoute exact isProtected path="/treefarm" component={TreeFarm} />
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
			<ConnectedRoute exact path="/login" component={Login} />
			<ConnectedRoute exact path="/register" component={Register} />
			<ConnectedRoute
				exact
				isProtected
				path="/introduction"
				component={Introduction}
			/>
			<ConnectedRoute path="*" component={MissingPage} />
		</Switch>
	);
}
